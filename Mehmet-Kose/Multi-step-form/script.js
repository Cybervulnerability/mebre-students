var num = 0;
var button = document.querySelector(".container .personal .box2 .button")
var one = document.getElementById("1")
var two = document.getElementById("2")
var three = document.getElementById("3")
var four = document.getElementById("4")

button.addEventListener("click", function(e) {
    if (num <= 3) {
        console.log(num);
        num++;
        e.preventDefault();

        switch (num) {
            case 1:
                one.style.backgroundColor = "black";
                one.style.color = "cyan";
                break;
            case 2:
                two.style.backgroundColor = "black";
                two.style.color = "cyan"
                break;
            case 3:
                three.style.backgroundColor = "black";
                three.style.color = "cyan"
                break;
            case 4:
                four.style.backgroundColor = "black";
                four.style.color = "cyan"
                break;
        }

    } else {

    }


});