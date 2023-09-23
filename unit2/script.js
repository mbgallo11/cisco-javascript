const priceRose = 8;
let qtyRose = 50
const priceLily = 10;
let qtyLily = 30;
const priceTulip = 2;
let qtyTulip = 120;
let totRose = priceRose * qtyRose;
let totLily = priceLily * qtyLily;
let totTulip = priceTulip * qtyTulip;


console.log( "Rose - unit price: ", priceRose, "Quantity: ", qtyRose, "Value: ", totRose)
console.log( "Lily - unit price: ", priceLily, "Quantity: ", qtyLily, "Value: ", totLily)
console.log( "Tulip - unit price: ", priceTulip, "Quantity: ", qtyTulip, "Value: ", totTulip)
console.log("Total: ", totRose+totLily+totTulip )