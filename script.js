

let btn = document.querySelector("#push").onclick = function(){


    if(document.querySelector("#new-task input").value.length === 0){
        alert("please enter a number");
    }
    else{
        document.querySelector("#tasks").innerHTML
     +=`
     <div class="task">
        <span id="taskname">
             ${document.querySelector("#new-task input" ).value}
             
        </span>
        <button class="delete"><i class="fa-solid fa-trash"></i></button>
     </div>
     `;

     let btn2 = document.querySelector("#btn2").onclick =function(){
        console.log(btn2)
     }
           
        
        
        
        
             
        
    }
}


