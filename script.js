const buttonOne = document.getElementById("left");
const buttonTwo = document.getElementById("right");
//selected the button element
const allDivs = document.querySelectorAll(".sec");
let currentActive =1;


buttonOne.addEventListener("click", function(){
    // add the event that occurs when the button is clicked
        currentActive--;
    update();
});


buttonTwo.addEventListener("click", function(){
        currentActive++;
    
    update();
    });

    function update(){
        // handle looping at the beginning
        if(currentActive===0){
            currentActive = allDivs.length;
        }
        
        //handle looping at the end
        if(currentActive>allDivs.length){
            currentActive =1;
        }
        allDivs.forEach((sec,index)=>{
            if(index === currentActive -1){
                sec.classList.add('active');
            }else{
                sec.classList.remove('active');
            }
        });
        
        //udate button states(optional)
        if(currentActive===1){
            buttonOne.disabled = true; // disable left button at the beginning
        }else {
            buttonOne.disabled = false; //enable left button otherwise
        }

        if(currentActive===allDivs.length){
            buttonTwo.disabled = true;//disable right button at the end
           }else{
            buttonTwo.disabled =false;//enable right button otherwise
        }
    }
