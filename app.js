var btnTranslate= document.querySelector("#btn-translator");
var txtInput= document.querySelector("#txt-input");
var txtOutput=document.querySelector("#output");
var serverUrl="https://api.funtranslations.com/translate/minion.json?text=";
function getTranslatorUrl(text){
    return serverUrl+text
}
function errorHandler(error){
    console.log("error occured: ",error);
    alert("Something is wrong. Try again after sometime.")
}


function clickEventHandler(){
 var inputText = txtInput.value;
 var url= getTranslatorUrl(inputText);
 
fetch(url)
.then(response=> response.json())
.then(json=>
    txtOutput.innerHTML=json.contents.translated)

 .catch(errorHandler);
 

   
}
btnTranslate.addEventListener("click",clickEventHandler);
