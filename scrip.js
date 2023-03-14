const noteCounter = document.getElementById("app");
coust addNoteButten = noteCounter.querySelector(".add-note");

function getNote(){
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]"); 
}

function saveNotes(notes){
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));

}

function createNoteElement(id,conutent){


}

function addNote(){

}

function updateNote(id, newCountent){

}