let Quotes = [
  "When you have a dream, you've got to grab it and never let go.",
  "Nothing is impossible. The word itself says 'I'm possible!'",
  "There is nothing impossible to they who will try.",
  "The bad news is time flies. The good news is you're the pilot.",
  "Life has got all those twists and turns. You've got to hold on tight and off you go.",
  "Keep your face always toward the sunshine, and shadows will fall behind you.",
  "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
  "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "You define your own life. Don't let other people write your script.",
];
const quoteSpace = document.getElementById("quoteSpace");
const quoteButton = document.getElementById("quoteButton");

quoteButton.addEventListener("click", function () {
  randomQuote = Quotes[Math.floor(Math.random() * Quotes.length)];
  quoteSpace.innerHTML = randomQuote;
});

// Load saved notes from local storage when the page loads
window.onload = function () {
  let savedNotes = localStorage.getItem("savedNotes");
  if (savedNotes) {
    document.querySelector("#myNotes").innerHTML = savedNotes;
    addCloseButtons(); // Add close buttons to loaded notes
  }
};

// Function to add close buttons to notes
function addCloseButtons() {
  let nodeList = document.querySelectorAll("#myNotes li");
  nodeList.forEach((item) => {
    addCloseButton(item);
  });
}

// Function to add a close button to a note
function addCloseButton(note) {
  let span = document.createElement("span");
  let text = document.createTextNode("\u00D7"); // x unicode
  span.className = "close";
  span.appendChild(text);
  note.appendChild(span);
  span.onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
    saveNotesToLocalStorage(); // Update local storage after note deletion
  };
}

// Function to create a new note
function newElement() {
  let inputvalue = document.querySelector("#myInput").value;
  if (inputvalue === "") {
    displayEmptyMessage("Please write something");
  } else {
    createNote(inputvalue);
    saveNotesToLocalStorage(); // Save notes to local storage
  }
  document.querySelector("#myInput").value = "";
}

// Function to create a new note element
function createNote(noteContent) {
  let li = document.createElement("li");
  let savedNote = document.createTextNode(noteContent);
  li.appendChild(savedNote);
  document.querySelector("#myNotes").appendChild(li);
  addCloseButton(li); // Add close button to the new note
}

// Function to save notes to local storage
function saveNotesToLocalStorage() {
  let notes = document.querySelector("#myNotes").innerHTML;
  localStorage.setItem("savedNotes", notes);
}

// Function to clear the input field
function clearElement() {
  document.querySelector("#myInput").value = "";
}

// Function to display an empty message
function displayEmptyMessage(message) {
  let emptyText = document.querySelector("#emptytext");
  emptyText.innerHTML = message;
  emptyText.style.backgroundColor = "pink";
  emptyText.style.border = "1px solid";
  setTimeout(hideEmptyMessage, 3000); // Hide message after 3 seconds
}

// Function to hide the empty message
function hideEmptyMessage() {
  let emptyText = document.querySelector("#emptytext");
  emptyText.innerHTML = "";
  emptyText.style.backgroundColor = "transparent";
  emptyText.style.border = "none";
}
