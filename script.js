let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

//to store result
let string = "";

//create an array of buttons to traverse them
let arr = Array.from(buttons);

arr.forEach(button => {

    //e is event obj(contains info about event) while e.target refers to element which triggered the event
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {


            string = eval(string);        //eval function helps in evaluating a string 
            input.value = string;
        }

        else if (e.target.innerHTML == "C") {
            string = "";      //empties the result
            input.value = string;  //updating the value of result in inputbox
        }

        else if (e.target.innerHTML == "DEL") {

            string = string.substring(0, string.length - 1)    //Removes last character from expression
            input.value = string;
        }


        //for other buttons
        else {

            string += e.target.innerHTML;   //Append the button's text content to the expression in inputbox
            input.value = string;
        }

    })
})