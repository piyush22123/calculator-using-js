let input = document.querySelector('#inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons); //array of buttons

arr.forEach(button => {
    button.addEventListener("click", function(e){

        if(e.target.innerHTML == '='){
            string = eval(string); //build in method to do calculate in string
            input.value = string; // return ans string in input box
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string; //if AC clicked make input box as default (0)
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1); //remove last digit from string
            input.value = string; 
        }
        else{
            string += e.target.innerHTML; // adding values in string
            input.value = string; // show in input box
        }
    })
})
