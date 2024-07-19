//equality operator
let val1 = 5;
let val2 = '5';
console.log(val1 == 5);
console.log(val2 == 5);        
console.log(val1 == val1);
console.log(0 == false);   
console.log(0 == null);

//inequality operator
let val3 = 5;
let val4 = '5';
console.log(val3 != 6);
console.log(val3 != '5');        
console.log(val3 != val4);
console.log(0 != false);   
console.log(0 != null);

//strict equality operator
let val5 = 5;
let val6 = '5';
console.log(val5 === 6);
console.log(val6 === '5');        
console.log(val5 === val6);
console.log(0 === false);   
console.log(0 === null);

//strict inequality operator
let val7 = 5;
let val8 = '5';
console.log(val7 !== 6);
console.log(val8 !== '5');        
console.log(val7 !== val8);
console.log(0 !== false);   
console.log(0 !== null);
