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
    let words = sentence.split(" ");
    let longestWord = "";
    
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    
    return longestWord;
}
let sentence = "Cвітло місяця останього дня освітить замкову цілину.";
console.log(findLongestWord(sentence));
console.log("---------------------------------------------");
// 4
function formatString(longSentence) {
    return longSentence.length <= 40 ? longSentence : longSentence.slice(0, 40) + '...';
}

console.log(formatString("Lorem ipsum dolor sit amet consectetur adipisicing elit."));
console.log("---------------------------------------------");
// 5
function checkForSpam(message) {
    if (message.includes("spam")) {
        return true;
    } else if (message.includes("sale")){
        return true;
    } else {
        return false;
    }
}
let message = "Hey! We are curently putting dress on sale, so if you are..."

console.log(checkForSpam(message));
console.log("---------------------------------------------");
// 6
let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Enter a number:");

  if (input === null) {
    break;
  }

  const number = parseFloat(input);
  if (isNaN(number)) {
    alert("There was not a number that was entered. Please try again.");
  } else {
    numbers.push(number);
  }
}

if (numbers.length > 0) {
  for (let number of numbers) {
    total += number;
  }
  console.log(`The total is = ${total}`);
} else {
  console.log("The list is empty.");
}
console.log("---------------------------------------------");
// 7