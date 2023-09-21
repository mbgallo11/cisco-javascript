//OBJECTS - Question 1
let ticket = {
    from: "Mexicali",
    to: "San Diego",
    price: 60,
}

console.log(`Ticket From: ${ticket.from}, To: ${ticket.to}, Price: ${ticket.price}`)

//OBJECTS - Question 2
let person = {};

person.name="Manuel Bernal";
person.surname="El Papas Fritas";

console.log(person)


//ARRAYS - Question 3
let library = [
    book1={
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460,
    },
    book2={
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        pages: 254,
    },
    book3={
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        pages: 352,
    }
];
console.log(library)

//ARRAYS - Question 4
newBook= {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
}
library.push(newBook)

console.log(library.length)
console.log(library)
console.log(`Book 1: ${library[0].title}, Book 2: ${library[1].title}, Book 3: ${library.title}, Book 4: ${library.title}`)

//ARRAYS - Question 5 
// se declara una nueva variable y se definen las posiciones que se necesitan "cortar" para el nuevo arreglo

let lilLibrary = library.slice(-2);
console.log(lilLibrary)

//ARRAYS - Question 6
let firstBook = library.shift();
console.log(library.length)
console.log(library[0].title, library[1].title, library[2].title);

let totPages = (library[0].pages + library[1].pages + library[2].pages)
console.log(totPages)