// 📌 PALINDROMI
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// FOR LOOP - IF CONDITION
function isAPalindrome(word) {
  let reversedWord = "";
  for (let i = userWord.length - 1; i >= 0; i--) {
    reversedWord += userWord[i];
  }

  if (userWord === reversedWord) {
    return true;
  }
}

const userWord = prompt("Type a word");
let reversedWord = "";

isAPalindrome(userWord);

if (isAPalindrome(userWord)) {
  console.log(userWord + " is a palindrome");
} else {
  console.log(userWord + " is NOT a palindrome");
}

// METHODS
// function isAPalindrome(word) {
//   let reversedWord = word.split("").reverse().join("");
//   return word === reversedWord;
// }

// const userWord = prompt("Type a word");

// if (isAPalindrome(userWord)) {
//   console.log(userWord + " is a palindrome");
// } else {
//   console.log(userWord + " is NOT a palindrome");
// }

// 📌 PARI E DISPARI
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const evenOrOddUser = prompt("Choose between even or odd");
console.log("You chose " + evenOrOddUser);

const userNumber = Number(prompt("Type a number between 1 and 5:"));
console.log("Your number is " + userNumber);

function logRandomPcNumber() {
  return Math.ceil(Math.random() * 5);
}
const pcNumber = logRandomPcNumber();
logRandomPcNumber();
console.log("The computer number is " + pcNumber);

const sum = userNumber + pcNumber;
console.log("La somma dei due numeri è " + sum);

function isEvenOrOdd() {
  if (evenOrOddUser === "even" && sum % 2 === 0) {
    console.log(
      `La somma di ${userNumber} e ${pcNumber} è ${sum}, che è pari, quindi hai vinto`
    );
  } else if (evenOrOddUser === "odd" && sum % 2 != 0) {
    console.log(
      `La somma di ${userNumber} e ${pcNumber} è ${sum}, che è dispari, quindi hai vinto`
    );
  } else {
    console.log("Ha vinto il Computer");
  }
}

isEvenOrOdd(sum);

// 💬 Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
// Domande da farsi quando si crea una funzione:
// Come dovrebbe chiamarsi?
// Ho bisogno di parametri?
// Devo restituire un valore?
// Se sì, di che tipo?
// Doc:
// https://www.w3schools.com/js/js_functions.asp
