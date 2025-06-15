//Global variable since its outside the function
var newLine = true;

//Makes sure that when a user clicks on the button, the button will appear on the screen
function digitBtnPressed(button){
  if(newLine){
   document.getElementById("inputBox").value = button;    //If newLine is true, it will replace the current value with the button clicked 
   newLine = false;                                       //Sets newLine to false so that the next button clicked will not replace the value
  } else {
  var currentValue = document.getElementById("inputBox").value;       //Gets the current value in the input box
  document.getElementById("inputBox").value = currentValue + button; //Adds the value clicked and the button
}
