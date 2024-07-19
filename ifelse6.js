const number = prompt("Enter a number: ");
if(number%3===0 && number%5===0 && number%15!==0){
    return true;
}
else{
    return false;
}