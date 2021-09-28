import "./styles.css";

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector(".txt-input");
var outputDiv = document.querySelector(".output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";
function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}
function errorHandler(error) {
  console.log("error occured", error);
  alert("cant reach server,try again later");
}
function clickHandler() {
  var inputText = txtInput.value;
  console.log("fetching translation");
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      console.log("json: -> ", json);
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
//.btn-primary
//"input[name-translator']"
