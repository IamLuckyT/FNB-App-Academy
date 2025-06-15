const digitBtnPressed(button);    // Button that opens the sidebar
//Makes sure that when a user clicks on the button, the button will appear on the screen
function digitBtnPressed(button){
  var currentValue = document.getElementById("inputBox").value;
  document.getElementById(inputBox).value = currentValue + button; //Adds the value clicked and the button
}
