let bl = false
let bl2 = Boolean(true)
console.log(`${typeof bl}, ${bl}`)
console.log(`${typeof bl2}, ${bl2}`)

let num = 35
let num2 = Number(40)
console.log(`${typeof num}, ${num}`)
console.log(`${typeof num2}, ${num2}`)

let bgn = 100n
let bgn2 = 1000n
console.log(`${typeof bgn}, ${bgn}`)
console.log(`${typeof bgn2}, ${bgn2}`)

let str = "Juan"
let str2 = "Manuel"
console.log(`${typeof str}, ${str}`)
console.log(`${typeof str2}, ${str2}`)

let undef = undefined
console.log(`${typeof undef}, ${undef}`) 

let b = Boolean( BigInt(Number("1234"))); 
console.log(`${b} [${typeof b}]`); // or 
let s = "1234"; 
let n = Number(s); 
let bi = BigInt(n); 
let b2 = Boolean(bi); 
console.log(`${b2} [${typeof b2}]`);


