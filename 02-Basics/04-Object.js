//Object declaration with the help of the constructor
const ObjectUsingConstructor=new Object();//empty singleton object
console.log(ObjectUsingConstructor);

ObjectUsingConstructor["name"]="Aditya";
ObjectUsingConstructor["age"]=22;
ObjectUsingConstructor["Email"]="adityakarki201@gmail.com";

console.log(ObjectUsingConstructor);

//Lets have some objects under the objects (nested Objects)
const NestedObj={
    email:"someEmail@mail.com",
    fullname:{
        userFullName:{
            firstName:"Aditya",
            lastName:"Karki"
        }
    }
}
console.log(NestedObj[fullname][userFullName][firstName]);
console.log(NestedObj.fullname.userFullName.lastName);

//We can also combine objects 

const obj1={
    1: "A",
    2: "B"
}
const obj2={
    3: "C",
    4: "D"
}
const obj3={obj1,obj2}; //Gives us object under objects { obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'C', '4': 'D' } }
console.log(obj3);

//To combine two objects we should be doing the things mentioned below
const obj4=Object.assign(obj1, obj2);
console.log(obj4); //   O/P: { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

//There is one slight syntax modification in line number 38 mentioned below to make it perfect
const obj5=Object.assign({},obj1,obj2);
console.log(obj5);

//The modification was done because the syntax of assign is assign(target,source) we wanted the target to be an empty object if the curly braces is not provied as mentioned in line number 38, the target will be the first object i.e. obj1 & source would be obj2


//  The best way to combine two or more objects is using spread operator, which we will be using most of the time
const obj6={...obj1,...obj2};
console.log(obj6);
console.log(`This is using the spread Operator ${JSON.stringify(obj6)}`);

//Data from the database will come in the form of the array of objects as mentioned below

const user=[
    {
        id:1,
        email:"ak@gmail.com"
    },
    {
        id:2,
        email:"hi@gmail.com"
    }
]
console.log(user[1].id);

console.log(ObjectUsingConstructor);
console.log(Object.keys(ObjectUsingConstructor));//It outputs the array of keys
console.log(Object.values(ObjectUsingConstructor));//It outputs the array of values

console.log(Object.entries(ObjectUsingConstructor)); //Its output is each key value pair is converted into individual array elements as mentioned below
// [
//     [ 'name', 'Aditya' ],
//     [ 'age', 22 ],
//     [ 'Email', 'adityakarki201@gmail.com' ]
//   ]

//Key is also known as property


//Sometimes it is better to know whether a property exist in the object before going through it, which can be done as follows
console.log(ObjectUsingConstructor.hasOwnProperty('name'));//returns either true or false;

//Destructuring objects
const course={
    courseName:"JS in Hindi",
    price:"999",
    courseInstructor:"Aditya"
}
//To usually use the values in the object we use the dot operator or the square bracket
//Lets say we want to use the value for more than 3 times than it can be very unefficient to use three times the dot operators
//Hence we destructure the objects

//The syntax goes like this 
// dataType {name of the key whose value needs to be extracted}="object from which the value needs to be extracted"
const {courseInstructor}=course;
console.log(courseInstructor);

//also within the same code the courseInstructor can also be renamed as follows:
const {courseInstructor: Instructor}=course;
console.log(Instructor);

//API is nothing but some values that comes from the backend and how we write them
//Earlier days it used to come in XML format (very complicated now it comes in the JSON format

//JSON is basically JavaScript Object Notation
// {
     //This is an empty JSON
// } It is just like an object, difference being we need to specify each key as an string eg is given below

// {
//     "name":"Aditya",
//     "Age":22,
//     "email":"adityakarki201@gmail.com"
// }

//below given is also an example of JSON objects
[
    {},
    {},
    {}
]//array of JSON objects
