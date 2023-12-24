let inputBox=document.querySelector('#textInput');
let str1="";
let displayBox=document.querySelector('#repeatedText');
let inputAmount=document.querySelector('#amount');

let resetBtn=document.querySelector('#reset');
let resetBox=()=>{
    displayBox.value=str1;
    inputBox.value=str1;
    // displayBox.style.transform='scale(0)';
   
    inputAmount.value=str1;

}




let clickBtn=document.querySelector('#click');

clickBtn.addEventListener('click',()=>{
   let inputValue= inputBox.value;
   
   displayBox.style.transform='scale(1)';
   displayBox.value=inputValue
   let str=inputValue;
   displayBox.value=str;
   let countAmount=inputAmount.value;
   
   let repeater=str.repeat(countAmount);
   console.log(repeater);
   displayBox.value=repeater; 
   resetBtn.style.transform='scale(1)'
   
   displayBox.style.transition='0.7s'
   
   
})
resetBtn.addEventListener('click',resetBox);