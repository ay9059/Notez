//@author: Abhishek Yadav
//This javascript file serves as the backend of my to do list program. 

//This is the list of acitivities which will be updated
const List = document.getElementById('activity-list');
eventlistener();
function eventlistener(){
   document.querySelector('#form').addEventListener('submit', addActivity);
   List.addEventListener('click',removeAcitivty);

}

function addActivity(activity){
    //copy the new activity and store it into the new activities tab
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
     
     //for debugging purposes
     console.log(new_text.textcontent);
}

//removes the acitivity
function removeAcitivty(event){
   (event.target.classList.contains('remove-button')) ?
   console.log("LMAO") : console.log("NO");
 

}
