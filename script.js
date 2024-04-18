// Load saved notes from local storage when the page loads
window.onload = function () {
  let savedNotes = localStorage.getItem("savedNotes");
  if (savedNotes) {
    document.querySelector("#myNotes").innerHTML = savedNotes;
    addCloseButtons(); // Add close buttons to loaded notes
  }
};

// Function to add close buttons to existing notes
function addCloseButtons() {
  let nodeList = document.getElementsByTagName("li");
  for (let i = 0; i < nodeList.length; i++) {
    let span = document.createElement("span");
    let text = document.createTextNode("\u00D7"); // x unicode
    span.className = "close";
    span.appendChild(text);
    nodeList[i].appendChild(span);
    span.onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
      saveNotesToLocalStorage(); // Update local storage after note deletion
    };
  }
}
let span = document.createElement("span");
text = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(text);
li.appendChild(span);

// SAVE THE NOTE
function newElement() {
  //  existing code for saving a new note
  let li = document.createElement("li");
  let inputvalue = document.querySelector("#myInput").value;
  let savedNote = document.createTextNode(inputvalue);
  li.appendChild(savedNote);
  if (inputvalue === "") {
    document.querySelector("#emptytext").innerHTML = "Please write something";
    document.querySelector("#emptytext").style.backgroundColor = "pink";
    document.querySelector("#emptytext").style.border = "1px solid";
    setTimeout(spanEmptytxt, 3000); // hide message in 3secs
  } else {
    document.querySelector("#myNotes").appendChild(li);
    saveNotesToLocalStorage(); // Save notes to local storage
  }
  document.querySelector("#myInput").value = "";
}

// Save notes to local storage
function saveNotesToLocalStorage() {
  let notes = document.querySelector("#myNotes").innerHTML;
  localStorage.setItem("savedNotes", notes);
}

// Clear input field
function clearElement() {
  document.querySelector("#myInput").value = "";
}

// Make "empty" disappear after 3 seconds
function spanEmptytxt() {
  document.querySelector("#emptytext").innerHTML = "";
  document.querySelector("#emptytext").style.backgroundColor = "transparent";
  document.querySelector("#emptytext").style.border = "none";
}
