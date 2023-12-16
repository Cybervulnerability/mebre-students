/*Select a Plan*/
window.addEventListener("DOMContentLoaded", ()=>{
    var planItem = document.querySelectorAll(".plan-item");
    for(var i=0; i<planItem.length; i++){
        planItem[i].addEventListener("click", function(){
            this.classList.toggle("active");
        });
    }
});

/*Switch Billing*/
window.addEventListener("DOMContentLoaded", ()=>{
    var switchBtn = document.querySelector(".switchBtn");
    var freeText = document.querySelectorAll(".plans .plan-item .yearly");
    var price = document.querySelectorAll(".plans .plan-item .content .price");
    price[0].innerHTML = "$9/mo";
    price[1].innerHTML = "$12/mo";
    price[2].innerHTML = "$15/mo";
    
    if(switchBtn.classList[1]=="monthly"){
        switchBtn.children[0].style.color = "hsl(213, 96%, 18%)";
    }
    switchBtn.addEventListener("click", function(e){
            if(this.classList[1] == "monthly"){
                this.classList.remove("monthly");
                this.classList.add("yearly");
                switchBtn.children[0].style.color = "grey";
                switchBtn.children[2].style.color = "hsl(213, 96%, 18%)";
                for(var i = 0; i<freeText.length; i++){
                    freeText[i].style.display = "block";
                }
                price[0].innerHTML = "$90/yr";
                price[1].innerHTML = "$120/yr";
                price[2].innerHTML = "$150/yr";
            }else{
                this.classList.remove("yearly");
                this.classList.add("monthly");
                switchBtn.children[0].style.color = "hsl(213, 96%, 18%)";
                switchBtn.children[2].style.color = "grey";
                for(var i = 0; i<freeText.length; i++){
                    freeText[i].style.display = "none";
                };
                price[0].innerHTML = "$9/mo";
                price[1].innerHTML = "$12/mo";
                price[2].innerHTML = "$15/mo";
            }
    })
})

/*Step Pagination*/
window.addEventListener("DOMContentLoaded", ()=>{
    var nextStep = document.querySelector(".multi-step-form .step-form .step-pagination .next");
    var previousStep = document.querySelector(".multi-step-form .step-form .step-pagination .previous");
    var stepNumbers = document.querySelectorAll(".multi-step-form .sidebar ul li .step-number");
    var stepPagination = document.querySelector(".multi-step-form .step-form .step-pagination");
    var stepCount = 0; //Stepleri saymak amacı ile;
    var stepItem = document.querySelectorAll(".multi-step-form .step-form .step");

    nextStep.addEventListener("click", function(){
        if(stepCount < stepItem.length -1){
            stepCount++;
        }if(stepCount == stepItem.length -1){
            stepPagination.style.display = "none";
        }
        for(var i = 0; i<stepItem.length; i++){
            if(stepCount == i){
                stepItem[stepCount].classList.remove("hidden");
                stepNumbers[stepCount].classList.add("active");
            }else{
                stepItem[i].classList.add("hidden");
                stepNumbers[i].classList.remove("active");
            }
        }
        if(stepCount > 0){
            previousStep.style.visibility = "visible";
        }
    });
    previousStep.addEventListener("click", function(){
        if(stepCount > 0){
            stepCount--;
        }
        for(var i = 0; i<stepItem.length; i++){
            if(stepCount == i){
                stepItem[stepCount].classList.remove("hidden");
                stepNumbers[stepCount].classList.add("active");
            }else{
                stepItem[i].classList.add("hidden");
                stepNumbers[i].classList.remove("active");
            }
        }
        if(stepCount == 0){
            previousStep.style.visibility = "hidden";
        }
    });
})