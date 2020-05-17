//@author: Abhishek Yadav
//This javascript file serves as the backend of my to do list program. 

//This is the list of acitivities which will be updated
const List = document.getElementById('activity-list');

eventlistener();

//a function containing all even listeners
function eventlistener(){
   document.querySelector('#form').addEventListener('submit', addActivity);
   List.addEventListener('click',removeAcitivty);
   document.addEventListener('DOMContentLoaded',loadNotes);

}


//adds new note 
function addActivity(activity){
    //copy the new activity from form and store it into the new todo list tab
     const new_activity = document.getElementById('tweet').value;
     
     //create new list to add the new acitivity
     const new_text = document.createElement('li');
     
     //the remove button for this acitivity which is actually an anchor
     const remove_button = document.createElement('a');
     remove_button.textContent='X';
     remove_button.classList='remove-button';

     //set the text of the new list 
     new_text.textContent = new_activity;
     
     //add the new node to List variable 
     new_text.appendChild(remove_button);
     List.appendChild(new_text);
     
     
     //add the note to the local storage
     addLocal(new_activity);
     

     

}

//removes the acitivity
function removeAcitivty(event){
   (event.target.classList.contains('remove-button')) ?
   event.target.parentElement.remove() : console.log();


   //also remove it from the local storage
   removefromLS(event.target.parentElement.textContent);
 

} 

//add the note to localStorage
function addLocal(new_activity){
   var loc = localStorage.getItem('Ary');

   if(loc==null){
      var notez = [];
   }else{
      var notez= JSON.parse(loc);       //What the fuck?
   }
   notez.push(new_activity);
   localStorage.setItem('Ary',JSON.stringify(notez));

   
}

//Load theNotes from localStorage
function loadNotes(){
   let notes = JSON.parse(localStorage.getItem('Ary'));

   if(notes!=null){
   notes.forEach(function(note){

      const new_text = document.createElement('li');
      const remove_button = document.createElement('a');
      remove_button.textContent='X';
      remove_button.classList='remove-button';
 
      //set the text of the new list 
      new_text.textContent = note;
      
      //add the new node to List variable 
      new_text.appendChild(remove_button);
      List.appendChild(new_text);
      

   });
}

}


//Remove the notes from LocalStorage
function removefromLS(note){
   note = note.substring(0, note.length-1)
   console.log(note);

   //get the localstorage array
   let aryLS = JSON.parse(localStorage.getItem('Ary'));


   aryLS.forEach(function(check_note,index){
      if(check_note===note){

         //an easter egg ;)
         console.log("yeee haw");
         aryLS.splice(index,1);

      }

   });

   

   //after removing the note, set it to the localstorage.
   localStorage.setItem('Ary',JSON.stringify(aryLS));





}
