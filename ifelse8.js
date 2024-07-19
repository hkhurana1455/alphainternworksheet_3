const num1 = prompt("Enter a number: ");
const num2 = prompt("Enter a number: ");
if (num1 >= num2 && num1 >= num3) {
    return num1;
} else if (num2 >= num1 && num2 >= num3) {
    return num2;
} else {
    return num3;
}
