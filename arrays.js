let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
console.log(days[0]);  //  ->  Sun
console.log(days[2]);  //  ->  Tue
console.log(days[5]);  //  ->  Fri

days[0]  =  "Sunday";
console.log(days[0]);  //  ->  Sunday

let  emptyArray  =  [];
console.log(emptyArray[0]);  //  ->  undefined


let animals = [];
console.log(animals[0]);

animals[0] = "dog";
animals[1] = "cat";

console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);


//array of any type
let  values  =  ["Test",  7,  12.3,  false];


//double array
let  names  =  [["Olivia",  "Emma",  "Mia",  "Sofia"],  ["William",  "James",  "Daniel"]];
console.log(names[0]);  //  ->  ["Olivia",  "Emma",  "Mia",  "Sofia"]
console.log(names[0][1]);  //  ->  Emma
console.log(names[1][1]);  //  ->  James

let  femaleNames  =  names[0];
console.log(femaleNames[0]);  //  ->  Olivia
console.log(femaleNames[2]);  //  ->  Mia



let users = [
    {
        name: "Calvin",
        surname: "Hart",
        age: 66,
        email1: "CalvinMHart@teleworm.us",
    },
    {
        name:"Mateus",
        surname:"Pinto",
        age:21,
        email:"MateusPinto@dayrep.com",
    }
];

console.log(users[0].name)
console.log(users[1].age)

users[2] ={
    name: "Juan",
    surname: "JuanMa",
    age: 36,
    email: "juanm.bernal@outpatientcallsolutions.com"
}
console.log(users[0].name);
console.log(users[1].name);
console.log(users[2].name);
console.log(users[2]);

let  days2  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
console.log("The days2 variable is type:",typeof days2, days2)
console.log(`${days2[0]}`)


let names2 = ["Olivia","Emma","Mateo","Samuel"];
console.log(names2.length);
console.log(names2.indexOf("Mateo"));
console.log(names2.indexOf("Samuel"));
console.log(names2.indexOf("olivia"));
names2.push("Amelia")
console.log(names2.length)
console.log(names2)

// names2.reverse();
console.log(names2);

let n1 = names2.slice(2);
console.log(n1);

let n4 = names2.slice(-1);
console.log(typeof n4, n4)

//CONCAT
let namesConcat = ["Olivia","Emma","Mateo","Samuel"];
let otherNames = ["William","Jane"];
let allNames = namesConcat.concat(otherNames);

console.log(namesConcat);
console.log(otherNames);
console.log(allNames);

