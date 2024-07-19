const cp = prompt("Enter cost price: ");
const  sp = prompt("Enter selling price: ");
let p,l;
if(sp>cp){
    p=sp-cp;
    console.log("profit: ",p);
    }
else{
    l=cp-sp;
    console.log("loss: ",l);
}
