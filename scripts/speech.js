//prefixed interfaces for chrome  and android
var SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

//the grammar that the application will respond to
var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral' ... ];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

//plugging grammar into speech recognition 
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

//add grammar to the list
speechRecognitionList.addFromString(grammar, 1);

//adding speech grammar list
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// starting speech recognition
var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');

var colorHTML= '';
colors.forEach(function(v, i, a){
  console.log(v, i);
  colorHTML += '<span style="background-color:' + v + ';"> ' + v + ' </span>';
});
hints.innerHTML = 'Tap/click then say a color to change the background color of the app. Try ' + colorHTML + '.';

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}

//receiving and handing results
recognition.onresult = function(event) {
    var color = event.results[0][0].transcript;
    diagnostic.textContent = 'Result received: ' + color + '.';
    bg.style.backgroundColor = color;
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  //stopping the speech recognition function
  recognition.onspeechend = function() {
    recognition.stop();
  }

  //errpr handling - speech not regognised in grammar
  recognition.onnomatch = function(event) {
    diagnostic.textContent = 'I didn\'t recognize that color.';
  }

    //errpr handling faoiure of recpgnition
  recognition.onerror = function(event) {
    diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
  }
  