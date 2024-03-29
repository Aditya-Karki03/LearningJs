//some normal comparision
console.log(1>2);
console.log(1<=2);
console.log(1==2); //does not check the data type in this case
console.log(1===2); //also checks the data type of both the value in this case


//console.log("2">1); here the string 2 gets automatically converted to number and outputs true but this type of comparision is not reccommended because of unpredictable output but gives some output
//console.log(null>=0); again not reccommended
//console.log(undefined<=0); not reccommended;

//The below code should be avoided at all cost
console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
//The reason behind the above unpredictable result is because equality check(==) and comparision(>=,<,>,>=) work differently.
//Comparision convers null to a number, treating as 0. That's why null>=0 is true and null>0 is false

console.log(undefined==0);//false 
console.log(undefined<=0);//false because undefined gets converted to NaN in number
console.log(undefined>=0);//false because undefined gets converted to NaN in number
