var btnTranslate= document.querySelector("#btn-translator");
var txtInput= document.querySelector("#txt-input");
var txtOutput=document.querySelector("#output");
var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=";
function getTranslatorUrl(text){
    return serverUrl+text
}



function clickEventHandler(){
 var inputText = txtInput.value;
 var url= getTranslatorUrl(inputText);
 
fetch(url)
.then(response=> response.json())
.then(json=>console.log(json.contents.translated))

 
 

   
}
btnTranslate.addEventListener("click",clickEventHandler);
