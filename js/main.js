// Version 01:

// Constants:
let arrClick = [0];

// Cached Element References:

const newNote = document.getElementById("newNote");
const newNoteField = document.getElementById("newNoteField");
const newNoteButton = document.getElementById("newNoteButton");
// Variable assigned to section of HTML (id "NewText") that will be updated by addNote function below.
const newText = document.getElementById("newText");

// Event Listeners:

// Feature 02: Add Note.
newNoteButton.addEventListener('click', function() {
    // Version 01 Function.
    addNote(event);
    // // Version 02 Function.
    // addNote2(event, noteArr, gridArr);
})

// Feature 03: Delete Note.
newText.addEventListener('click', function() {
    noteButtons(event, arrClick);
})

// Functions:

// Feature 02a: Create Note Card.
function addNote(event) {
    event.preventDefault();
    // Feature 01: 255 Character Limit.
    if (newNoteField.value.length < 256) {
        // Creates new div (class "noteContainer") to contain note.
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("noteContainer");
        // Creates new p (class "noteItem") with submitted text.
        const noteText = document.createElement("p");
        noteText.innerText = newNoteField.value;
        noteText.classList.add("noteItem");
        cardDiv.appendChild(noteText);
        // Feature 03a: Delete Button.
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Remove";
        deleteButton.classList.add("removeButton");
        cardDiv.appendChild(deleteButton);
        // Feature 04a: Edit Button.
        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.classList.add("modifyButton");
        cardDiv.appendChild(editButton);
        // Appends section of HTML with the id of "newText" with "cardDiv".
        newText.appendChild(cardDiv);
        // Clear the "newNoteField" input value after submitting the form.
        newNoteField.value = "";
    // Feature 01: 255 Character Limit.
    } else {
        alert("There are too many characters in the note field (255 maximum).");
    }
} 

// Feature 03b | 04b | 05: Delete | Edit Function | Click 01 (Highlight Note).
function noteButtons(event, arrClick) {
    const item = event.target;
    // Feature 03b: Delete Function.
    if (item.classList[0] === "removeButton") {
        const note = item.parentElement;
        note.remove();
    // Feature 04b: Edit Function.
    } else if (item.classList[0] === "modifyButton") {
        let edit = prompt("Please enter a new note in the section below.")
        if (edit != null) {
            // Replaces old node with new edit node.
            let currentNode = item.parentElement;
            let newNode = document.createElement('div')
            // Container.
            newNode.classList.add("noteContainer");
            const noteText = document.createElement("p");
            noteText.innerText = edit;
            noteText.classList.add("noteItem");
            newNode.appendChild(noteText);
            // Delete Button.
            const deleteButton = document.createElement("button");
            deleteButton.innerText = "Remove";
            deleteButton.classList.add("removeButton");
            newNode.appendChild(deleteButton);
            // Edit Button.
            const editButton = document.createElement("button");
            editButton.innerText = "Edit";
            editButton.classList.add("modifyButton");
            newNode.appendChild(editButton);
            // Replaces old node with new edit node.
            currentNode.parentNode.replaceChild(newNode, currentNode);
          }
    } else if (item.classList[0] === "noteContainer" || "noteItem") {
        // Feature 06a: Click 02 (Switch Notes).
        if (arrClick[0] === 0 ) {
            arrClick.splice(0, 1, item)
            console.log (arrClick)
        } else {
            let current = item;
            let previous = arrClick[0];
            trade(current, previous);
        }
        // Feature 06b: Click 02 (Deselect Note).
        let color = item.style.borderColor;
        color = item.style.borderColor = color === 'white' ? 'black' : 'white';
    } else {
    }
}

// Feature 06a: Click 02 (Switch Notes).
function trade(current, previous) {
    var temp = document.createElement("div");
    current.parentNode.insertBefore(temp, current);

    // Move current to right before previous.
    previous.parentNode.insertBefore(current, previous);

    // Move previous to right before where current used to be.
    temp.parentNode.insertBefore(previous, temp);

    // Remove temporary marker node.
    temp.parentNode.removeChild(temp);
}       

// Alternate Code and Notes:

// Feature 01: 255 Character Limit.
// Feature 02a: Create Note Card.
// Feature 02b: Organizes new notes into rows with up to 6 notes per row.
// Feature 03a: Delete Button.
// Feature 03b: Delete Function.
// Feature 04a: Edit Button.
// Feature 04b: Edit Function.
// Feature 05: Click 01 (Highlight Note).
// Feature 06a: Click 02 (Switch Notes).
// Feature 06b: Click 02 (Deselect Note).

// Version 02:

// const noteArr = [];
// const gridArr = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'];

// function addNote2(event, noteArr, gridArr) {
//     event.preventDefault();
//     // Creates new div (class "noteContainer") to contain note.
//     // Feature 01: 255 character limit.
//     if (newNoteField.value.length < 256) {
//         // Iterate along note grid with array "noteArr". "gridArr" adds new id to match "noteArr" content.
//         noteArr.push(newNoteField.value);
//         for (let i = 0; i < noteArr.length; i++) {
//             document.getElementById(gridArr[i]).innerHTML = noteArr[i];
//             console.log(noteArr)
//         }
//         // Clear the "newNoteField" input value after submitting the form.
//         newNoteField.value = "";
//     } else {
//         alert("There are too many characters in the note field (255 maximum).");
//     }
// } 

// HTML:
// Version 01: Grid (6x6)
// <h2 class="title">- Version 02: Fixed Grid -</h2>
// <h2 class="title">Note Grid (6X6):</h2>
// <br>
// <br>
// <div class="grid">
//     <!-- Row 01  -->
//     <div class="gridNote" id="00"></div>
//     <div class="gridNote" id="01"></div>
//     <div class="gridNote" id="02"></div>
//     <div class="gridNote" id="03"></div>
//     <div class="gridNote" id="04"></div>
//     <div class="gridNote" id="05"></div>
//     <!-- Row 02 -->
//     <div class="gridNote" id="06"></div>
//     <div class="gridNote" id="07"></div>
//     <div class="gridNote" id="08"></div>
//     <div class="gridNote" id="09"></div>
//     <div class="gridNote" id="10"></div>
//     <div class="gridNote" id="11"></div>
//     <!-- Row 03 -->
//     <div class="gridNote" id="12"></div>
//     <div class="gridNote" id="13"></div>
//     <div class="gridNote" id="14"></div>
//     <div class="gridNote" id="15"></div>
//     <div class="gridNote" id="16"></div>
//     <div class="gridNote" id="17"></div>
//     <!-- Row 04 -->
//     <div class="gridNote" id="18"></div>
//     <div class="gridNote" id="19"></div>
//     <div class="gridNote" id="20"></div>
//     <div class="gridNote" id="21"></div>
//     <div class="gridNote" id="23"></div>
//     <div class="gridNote" id="24"></div>
//     <!-- Row 05 -->
//     <div class="gridNote" id="25"></div>
//     <div class="gridNote" id="26"></div>
//     <div class="gridNote" id="27"></div>
//     <div class="gridNote" id="28"></div>
//     <div class="gridNote" id="29"></div>
//     <div class="gridNote" id="30"></div>
//     <!-- Row 06 -->
//     <div class="gridNote" id="31"></div>
//     <div class="gridNote" id="32"></div>
//     <div class="gridNote" id="33"></div>
//     <div class="gridNote" id="34"></div>
//     <div class="gridNote" id="35"></div>
//     <div class="gridNote" id="36"></div>
// </div> 
