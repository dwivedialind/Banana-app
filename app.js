var btnTranslate= document.querySelector("#btn-translator");
var txtInput= document.querySelector("#txt-input");
var txtOutput=document.querySelector("#output");



function clickEventHandler(){
 
    txtOutput.innerText= "jjsjs "+ txtInput.value;

   
}
btnTranslate.addEventListener("click",clickEventHandler);
