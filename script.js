/*let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
        string = string(0,txt.length-1)
        document.querySelectorAll('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})*/
// const numButtons = document.querySelectorAll('.number');
// const operatorButtons = document.querySelectorAll('.operator');
// const clearButton = document.querySelector('.clear');
// const equalButton = document.querySelector('.equal');
// const backButton = document.querySelector('.back');
// const display = document.querySelector('.input');

// numButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     display.value += button.innerHTML;
//   });
// });

// operatorButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     display.value += button.innerHTML;
//   });
// });

// clearButton.addEventListener('click', () => {
//   display.value = '';
// });

// equalButton.addEventListener('click', () => {
//   display.value = eval(display.value);
// });

// backButton.addEventListener('click', () => {
//   display.value = display.value.slice(0, -1);
// });

//3rd attempt
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})
