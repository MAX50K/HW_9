// 1
function logItems (a, b, c, d, e, f) {
    for (let i = 0; i < logItems.length; i++) {
        console.log(`${i + 1} - ${logItems[i]}`);
    }
}
logItems = ["42", "Chaos", "Omega", "99", "Phantom", "Void"]

console.log("---------------------------------------------");
// 2
function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(" "); 
    return words.length * pricePerWord; 
}
console.log(calculateEngravingPrice("Я люблю цукерки", 10)); 
console.log(calculateEngravingPrice("Пташки літають в небі", 15));
console.log("---------------------------------------------");
// 3
function findLongestWord(sentence) {
    let words = string.split(" ");
    let sentence = "";
    
    for (let word of words) {
        if (word.length >= sentence.length) {
            sentence = word;
        }
    }
    
    return sentence;
}
console.log(findLongestWord("Cвітло місяця останього дня освітить замкову цілину."));
console.log("---------------------------------------------");
// 4
function formatString(longSentence) {
    return longSentence.length <= 40 ? longSentence : longSentence.slice(0, 40) + '...';
}

console.log(formatString("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut blanditiis totam?"));
// 5
function checkForSpam(DiscordMessage) {
    if (DiscordMessage.includes("spam" || "sale")) {
        return true;
    } else {
        return false;
    }
}