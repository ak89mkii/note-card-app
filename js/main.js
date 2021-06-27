// Version 01:

// Constants:

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
    noteButtons(event);
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
function noteButtons(event) {
    const item = event.target;
    // Feature 03b: Delete Function.
    if (item.classList[0] === "removeButton") {
        const note = item.parentElement;
        note.remove();
    // Feature 04b: Edit Function.
    } else if (item.classList[0] === "modifyButton") {
        let edit = prompt("Please enter a new note in the section below.")
        if (edit != null) {
            // note.remove();
            // item.parentElement = editNote(event, edit);
            let currentNode = item.parentElement;
            let newNode = document.createElement('div')
            newNode.classList.add("noteContainer");
            const noteText = document.createElement("p");
            noteText.innerText = edit;
            noteText.classList.add("noteItem");
            newNode.appendChild(noteText);
            // Feature 03a: Delete Button.
            const deleteButton = document.createElement("button");
            deleteButton.innerText = "Remove";
            deleteButton.classList.add("removeButton");
            newNode.appendChild(deleteButton);
            // Feature 04a: Edit Button.
            const editButton = document.createElement("button");
            editButton.innerText = "Edit";
            editButton.classList.add("modifyButton");
            newNode.appendChild(editButton);
            currentNode.parentNode.replaceChild(newNode, currentNode);
          }
    } else if (item.classList[0] === "noteContainer" || "noteItem") {
        let color = item.style.borderColor;
        color = item.style.borderColor = color === 'white' ? 'black' : 'white';
    } else {
    }
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