//roll through span with id titleRoll -adding; searchable, saveable, addable, useable, comfortable
let titleArray = ["searchable", "saveable", "addable", "useable", "comfortable"];
let arrIndex = indexOf(titleArray);
//const numbers2 = titleArray.map(myFunction);
//titleRoll = document.getElementById("titleRoll").innerHTML = titleArray;



//Faied attempts
/*
titleArray.forEach(myFunction);
document.getElementById("titleRoll").innerHTML = titleArray;
function myFunction(value, ) {
    let txt = "";
  txt += value ;
} 
*/
/*
const interval = setInterval(function() {
    for(let i = 0; i < titleRoll.length; i++); {
    } document.getElementById("titleRoll").innerHTML = titleArray;
  }, 5000);
 */

  var timer;
         
  function startTimer() {
      timer = setInterval(function() {
          alert("5 seconds are up");
      }, 5000);
  }
   
  function stopTimer() {
      alert("Timer stopped");
      clearInterval(timer);
  }