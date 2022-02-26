// get input element
let filterInput = document.getElementById("filterInput");
//event listener
filterInput.addEventListener("keyup", filterNames);
//remember to add filterNames function back above when finished

function filterNames() {
    //get input value
    let filterValue = document.getElementById("filterInput").value.toUpperCase();
    //get lis from ul in document
  let li = document.querySelectorAll("li.collection-item");

 
    //loop through listItem lis
    for(let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        //if matched
        if(a.innerHTML.charAt(0).toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}







/*
// get input element
let filterInput = document.getElementById("filterInput");
//event listener
filterInput.addEventListener("keyup", filterNames);
//remember to add filterNames function back above when finished

function filterNames() {
    //get input value
    let filterValue = document.getElementById("filterInput").value.toUpperCase();
    //get lis from ul in document
  let li = document.querySelectorAll("li.collection-item");

 
    //loop through listItem lis
    for(let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        //if matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
*/

//remove name from list
//hide list headers if first letter doesn't match
//hide names if first letter, second letter doesn't match
//onclick open profile page of that person
//add most searched function
//add insert contact details
