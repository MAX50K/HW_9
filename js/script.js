// 1
function logItems (a, b, c, d, e, f) {
    
}
logItems = ["42", "Chaos", "Omega", "99", "Phantom", "Void"]
for (let i = 0; i < logItems.length; i++) {
    console.log(`${i + 1} - ${logItems[i]}`);
}
console.log("---------------------------------------------");
// 2
function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(" "); 
    return words.length * pricePerWord; 
}

console.log(calculateEngravingPrice("Я люблю цукерки", 10)); 
console.log(calculateEngravingPrice("Героям слава", 15));  
