let bar = document.querySelectorAll(".mybar");
let arr = Array.from(bar);

let name = document.querySelectorAll(".abmshawonislam");

let mainArr = Array.from(name);


mainArr.map(function(mainArr){
    let dataName = mainArr.dataset.name;


    // progressbar js
if(dataName == "progressbar"){
    arr.map((item)=>{
        let i=0;
        function bar(){
            let width = setInterval(function(){
                i++;
                item.style.width = i+"%";
                
                if(i==item.dataset.length){
                    
                    clearInterval(width)
                }
                item.firstElementChild.innerHTML = i
                
            },item.dataset.speed)

            if(item.firstElementChild.dataset.running == "false"){
                item.firstElementChild.style.left = "0"
                item.firstElementChild.style.right = "auto"
            }
        }
      bar()
    })
}

// Type js
else if(dataName == "typejs"){
    let i = 0;
    function typejs(){
        mainArr.innerHTML += mainArr.dataset.type.charAt(i)
        if(i == mainArr.dataset.type.length){
               i=-1;
               mainArr.innerHTML = "" 
        }
    }
 setInterval(() => {
        typejs()
        i++
    }, mainArr.dataset.speed);
}


// counter js
else if(dataName == "counterjs"){
    let i = 0;

    function counterjs(){
        mainArr.innerHTML = i;
       if(i == mainArr.dataset.counter){
           clearInterval(counter)
       } 
    }

    let counter = setInterval(() => {
        counterjs()
        i++
    }, mainArr.dataset.speed);
}

})

