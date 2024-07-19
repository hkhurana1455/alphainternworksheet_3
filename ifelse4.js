const number = prompt("Enter a number: ");
const numstr=number.toString();
if(numstr.length===3 && !isNaN(number)){
    return true;
}
else{
    return false;
}