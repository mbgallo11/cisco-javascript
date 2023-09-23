let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    },
    {   
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
    }];

    console.log(contacts.length)
    console.log(`${contacts[0].name}, ${contacts[0].phone}, ${contacts[0].email}`)
    console.log(`${contacts[3].name}, ${contacts[3].phone}, ${contacts[3].email}`)

    /* 
    
    This is a block o comments
    
    */

//  //   "use  strict";  
// const  prefix  =  "username_";  

// let  userName  =  "Jack";  
// const  userName2  =  "Adam";  
   
// let  prefixedUserName;  
// const  prefixedUserName2 = prefix + userName2  
   
// userName  =  "John";  
// prefixedUserName  =  prefix  +  userName;  
   
// console.log(prefixedUserName  +  prefixedUserName2);  
// console.log(prefixedUserName2);

"use strict"; 
const prefix = "username_"; 
let userName = "Jack"; // const userName = "Adam"; 
let prefixedUserName; // const prefixedUserName; 
userName = "John"; 
prefixedUserName = prefix + userName; 
console.log(prefixedUserName /*+ prefixedUserName2*/); // console.log(prefixedUserName2);


