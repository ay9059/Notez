//@author: Abhishek Yadav
//This javascript file serves as the backend of my to do list program. 

//This is the list of acitivities which will be updated
const List = document.getElementById('activity-list');

eventlistener();

function eventlistener(){
   document.querySelector('#form').addEventListener('submit', addActivity);
   List.addEventListener('click',removeAcitivty);
   document.addEventListener('DOMContentLoaded',loadNotes);

}

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
     addLocal(new_activity);
     
     //add the note to the local storage
     

     

}

//removes the acitivity
function removeAcitivty(event){
   (event.target.classList.contains('remove-button')) ?
   event.target.parentElement.remove() : console.log();

   removefromLS(event.target.parentElement.textContent);
 

} 

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


function removefromLS(note){
   note =note.substring(0, note.length-1)
   console.log(note);

   //get the localstorage array
   let aryLS = JSON.parse(localStorage.getItem('Ary'));


   aryLS.forEach(function(check_note,index){
      if(check_note===note){
         console.log("yeee haw");
         aryLS.splice(index,1);

      }

   });

   console.log(aryLS);

   localStorage.setItem('Ary',JSON.stringify(aryLS));





}
