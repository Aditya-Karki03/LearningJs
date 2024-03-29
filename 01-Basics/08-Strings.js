const firstName="aditya ";
let age=22;
console.log(firstName+age);//Outdated way of concatenation of the strings

console.log(`Hi My Name is ${firstName}, and I am ${age} years old`); 
//The 5th console.log is used in the industry and is more readable + we can use lot more methods 
//inside the $ with the variables and this syntax is called string interpolation

const lastName=new String("Karki"); //another way of declaring a string using string object
//By using new keyword we use javaScript objects
//lastName is the instance(instance in loose way can also be said as one replica of original object which is created and initialized using constructor, replica of object(string) called with the help of constructor using the new keyword) of String object which is initialized with "Karki"

//when we log the code in line no 9 in the browser its O/P would be:- String {`Karki`}
// 0: "K"
// 1: "a"
// 2: "r"
// 3: "k"
// 4: "i"
//length: 8
//Mind you!! from line number 13 to 17 we have a key value pair it is not an array, it is a String object
//with this we get the length and many more methods

console.log(lastName[0]);//Its output is K because it is an string object, hence key value pair 
// we accessed the pair with the help of the key
console.log(lastName.0)//This code does not work in here

console.log(lastName.length); //length is a property, similarly to the properties all the methods could also be accessed

console.log(lastName.toUpperCase()); //this one is a method, which changes all the characters of lastName to uppercase but does not affect the original string because string is a primitive data type which are call by value which means a copy of original value is passed and that is changed not the original

 console.log(lastName.charAt(1)); //Gives the character at the first position and its output is a

 console.log(lastName.indexOf('K')); //Returns the index of the K character

 const newString=firstName.substring(0,4); //In substring we can't give the negative values, 4 is the number of characters & 0 is the starting index
 console.log(newString);

 const anotherString=firstName.slice(-8,3);//In slice we can give negative values, the last character will be lastIndex-1
 console.log(anotherString);
//difference between slice and substring is we can give -ve values inside the slice wheras if we give -ve value inside the substring it will ignore that value and start from 0

 const newString1="  Aditya  ";
 console.log(newString1);
console.log(newString1.trim()); //It trims the extra space from the input string in our case hardcoded

const url="https://www.google.com";
console.log(url);
console.log(url.replace('google','Aditya')); //When stored in a variable and logged the typeof the output is string

console.log(url.includes('google')); //When stored in a variable and logged the typeof the output is boolean

console.log(firstName.split('a')); //When stored in a variable and logged the typeof the output is object
