// get input element
let filterInput = document.getElementById("filterInput");
//event listener
filterInput.addEventListener("keyup", filterNames);

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