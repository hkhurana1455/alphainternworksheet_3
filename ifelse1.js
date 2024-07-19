function largest(a, b, c, d){
    return Math.max.apply(null, arguments)
 }
 let a = 10, b = 9, c = 11, d = 7;
 
 console.log(largest(a, b, c, d))
 