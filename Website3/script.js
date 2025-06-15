//Global variable since its outside the function
var newLine = true;              
var value1;
var currentOperator;                        

//Makes sure that when a user clicks on the button, the button will appear on the screen
function digitBtnPressed(button){
  if(newLine){
   document.getElementById("inputBox").value = button;    //If newLine is true, it will replace the current value with the button clicked 
   newLine = false;                                       //Sets newLine to false so that the next button clicked will not replace the value
  } else {
  var currentValue = document.getElementById("inputBox").value;       //Gets the current value in the input box
  document.getElementById("inputBox").value = currentValue + button; //Adds the value clicked and the button
  }

  //Event handler for when AC button is pressed
  function btnACPressed(){
    document.getElementById("inputBox").value = "";           //Clears the input box
    newLine = true;                                           //Sets newLine to true so that the next button clicked will replace the value
  }

  function operatorBtnPressed(operator){
    value1 = parseInt(document.getElementById("inputBox").value);     //Gets the current value in the input box
    currentOperator = operator;                              //Sets the current operator to the operator clicked
    newLine = true;                                          //Sets newLine to true so that the next button clicked will replace the value
  }

  function equalsbtnPressed(){
    var value2 = parseInt(document.getElementById("inputBox").value); //Gets the current value in the input box
    var finalTotal;                                                   //Variable to store the result

    //Checks which operator was clicked and performs the corresponding operation
    if(currentOperator === "+"){
      finalTotal = value1 + value2;
    } else if(currentOperator === "-"){
      finalTotal = value1 - value2;
    } else if(currentOperator === "*"){
      finalTotal = value1 * value2;
    } else if(currentOperator === "/"){
      finalTotal = value1 / value2;
    }

    document.getElementById("inputBox").value = result;         //Displays the result in the input box
    newLine = true;                                             //Sets newLine to true so that the next button clicked will replace the value
  }
}
