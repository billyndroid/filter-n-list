// get input element
let filterInputHeaderText = document.getElementById("filterInput");
//event listener
filterInputHeaderText.addEventListener("keyup", filterHeader5);

//add name to list using a form
//get h5 elements and assign
function filterHeader5() {
    //get input value
    let filterValue = document.getElementById("filterInput").value.toUpperCase();
    //get lis from ul in document
  let liHeader = document.querySelectorAll("li.collection-header");

 
    //loop through listItem lis
    for(let i = 0; i < liHeader.length; i++) {
        let a = liHeader[i].getElementsByTagName("h5")[0];
        //if matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            liHeader[i].style.display = "";
        } else {
            liHeader[i].style.display = "none";
        }
    }
}


