var btnTranslate= document.querySelector("#btn-translate");
btnTranslate.addEventListener("click", clickEventHandler);
var txtInput=document.querySelector("#txt-input");
txtInput.addEventListener("click",clickEventHandler);    
function clickEventHandler(){
    console.log("Clicked!!");
    console.log(txtInput);
}
