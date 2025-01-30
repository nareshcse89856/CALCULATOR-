const cal= document.getElementById("input");
function appendToDisplay(input){
    cal.value += input;
}
function clearDisplay(){
    cal.value="";
}
function calculate(){
    cal.value= eval(cal.value);
}