const noteText= document.getElementById("note-text");
const saveButton= document.getElementById("save-button");
const listDisplay= document.getElementById("notes-list");
const clearButton= document.getElementById("clear-button");

let notes=[];

function storeNotes(){
const storedNotes = localStorage.getItem("notes");
if(storedNotes){
   notes = JSON.parse(storedNotes);
   displayNotes();
 
}

}
function saveNotes(){

   localStorage.setItem("notes", JSON.stringify(notes));
}


 function addNote(){
const note = noteText.value.trim();
if (note) {
   notes.push(note);
   noteText.value= '';
   displayNotes();
   saveNotes();
   saveButton.style.display = 'none';
   
   console.log(note);
}
   
 }
 function displayNotes(){

listDisplay.innerHTML='';
 notes.forEach((note,index)=>{
const li = document.createElement('li');
li.textContent = note;

const deleteNote = document.createElement('button');
 deleteNote.textContent='Delete note';
 deleteNote.addEventListener('click', ()=>{
removeTask(index);

 } );

 listDisplay.appendChild(li);
 li.appendChild(deleteNote);



 });

 if(notes.length > 0){
   clearButton.style.display = 'inline-block';

}else {
   clearButton.style.display = 'none';
}
}

 function removeTask(index){
notes.splice(index, 1);
displayNotes();
saveNotes();


 }

 function clearNotes(){ 
   notes = [];
   displayNotes();
   saveNotes();
 }
 storeNotes();

 saveButton.addEventListener('click', addNote);
 clearButton.addEventListener('click', clearNotes);
 noteText.addEventListener('input', () => {
   if (noteText.value.trim() !== '') {
       saveButton.style.display = 'inline-block'; // Show button when typing starts
   } else {
       saveButton.style.display = 'none'; // Hide button if textarea is empty
   }
});
 