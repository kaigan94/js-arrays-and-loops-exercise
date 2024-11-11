// // *** ARRAYS *** //

// const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];

// // #1: Zidane, för det är position 3. Man utgår alltud från 0 i JS när det gäller listor.
// console.log(names[2]);

// // #2: (7) - eftersom jag tog "push" till arrayen.
// names.push("Drogba");
// console.log(names);

// // #3: (8) - eftersom jag tog "unshift" på namnet så kom den längst fram.
// names.unshift("Figo");
// console.log(names);

// // #4: pop tog bort sista namnet, vilket var Drogba. Det nya värdet blev "Ronaldo" i konsollen.
// names.pop();
// console.log(names.pop());

// // *** ARRAYS Forts. *** //
// const players = [
//   "Zlatan",
//   "Beckham",
//   "Zidane",
//   "Ronaldo",
//   "Romario",
//   "Maradona",
// ];

// // #7: = false. Innebär att det inte finns med i listan.
// console.log(players.includes("Messi")); // false

// // #8:
// if (players.includes("Zlatan")) {
//   console.log("ja, han finns med");
// } else {
//   console.log("nej, han finns inte med");
// }

// // #9: 5, eftersom det är namn nummer "5" i listan.
// console.log(players.indexOf("Maradona"));

// // #10: finns inte med. Kan vara bra att veta om man ska kolla listor.
// console.log(players.indexOf("Messi")); // -1

// // #11:
// console.log(players.join(", ")); // Zlatan, Beckham, Zidane, Ronaldo, Romario, Maradona

// // #12:
// console.log(players.join(" - ")); // Zlatan - Beckham - Zidane - Ronaldo - Romario - Maradona

// // #13: Beckham är 1, Zidane är 2 i denna listan. Splice fungerar som att ta bort/lägg till i en lista.
// console.log(players.splice(1, 2)); // (2) ['Beckham', 'Zidane'] försvann.

// // #14: Den lägger "Ronaldinho" som andra namnet i listan.
// players.splice(1, 0, "Ronaldinho");
// console.log(players);

// // #15: indexet är 2, jag vill ta bort 1. Jag skapade en variabel av "Ronaldo" och tog sen bort "1" för att ta bort honom.
// const removeName = players.indexOf("Ronaldo");
// console.log(removeName);
// console.log(players.splice(removeName, 1));

// // #16: den kopierar från den delar från original-arrayen till en ny array och lämnar originalet oförändrat.
// const topPlayers = players.slice(0, 3);
// console.log(topPlayers);

// // #17: eftersom slice gör en ny array och inte ändrar på originalet, behåller "players" samma värde som innan.
// const selectedPlayers = players.slice(2); // Tar bort de 2 första spelarna i listan.
// console.log(selectedPlayers); // "Zidane", "Ronaldo", "Romario", "Maradona" blir den nya.
// console.log(players); // "Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona". Originalet ändras ej.

// // Uppg 18: with (1, Mbappé) bytte ut 'Beckham' mot 'Mbappé'. Originalet blir oförändrat.
// const updatedPlayers = players.with(1, "Mbappé");

// console.log(updatedPlayers); // 'Zlatan', 'Mbappé', 'Romario', 'Maradona' .
// console.log(players); // 'Zlatan', 'Ronaldinho', 'Romario', 'Maradona' .

// *** LOOPS *** // Detta tog jag full hjälp av ChatGPT med. Klarade inte detta, men visar svaren och gick genom det, fortfarande svårt med loopar. Måste träna.

// Uppg 19: Utgå från arrayen nedan. Skriv en for-loop som skriver ut varje tal i arrayen.
// const numbers = [5, 8, 12, 20, 3];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// #20:
// let sum = 0; // sum sätts till "0". Det är för att efter loopen har gått genom alla nummer ska det bli "0" kvar.

// for (let i = 0; i < numbers.length; i++) {
//   // sum += numbers[i]; // numbers[i] hämtar värdet på det aktuella numret. sum += numbers[i]; adderar värdet till "sum".
// }
// console.log("Summan är:", sum); // summan är "48".

// #21:
// const numbers = [5, 8, 12, 20, 3];
// let largestNumber = numbers[0]; // Startar med det första talet som största värde

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > largestNumber) {
//     largestNumber = numbers[i]; // Uppdatera om vi hittar ett större tal
//   }
// }

// console.log(largestNumber); // 20

// #22:
// const numbers = [5, 8, 12, 20, 3]; //
// const numbers = [5, 8, 12, 20, 3]; // 10, 16, 24, 40, 6
// const doubledNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   doubledNumbers.push(numbers[i] * 2);
// }

// console.log(doubledNumbers);

// #23
// const numbers = [5, 8, 12, 20, 3];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i]; // Lägg till varje tal till summan
// }

// let average = sum / numbers.length; // Dela summan med antalet tal för att få medelvärdet
// console.log(average); //9.6 är medelvärdet

// #24
// const numbers = [5, 8, 12, 20, 3];
// let smallestNumber = numbers[0]; // Starta med det första talet som minsta värde

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < smallestNumber) {
//     smallestNumber = numbers[i]; // Uppdatera om vi hittar ett mindre tal
//   }
// }

// console.log(smallestNumber); // 3 är det minsta talet

// #25
// const numbers = [5, -3, 8, -2, 12, -1, 0];
// const positiveNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     positiveNumbers.push(numbers[i]); // Lägg till endast positiva tal i den nya arrayen
//   }
// }

// console.log(positiveNumbers); //5, 8, 12

// #26
// const mixedNumbers = [3, -5, 12, -1, 8, -6];

// for (const num of mixedNumbers) {
//   if (num > 0) {
//     console.log(num); // 3, 12, 8
//   }
// }

// #27
// const numbers = [5, 8, 12, 20, 3];
// let i = 0;

// while (i < numbers.length) {
//   console.log(numbers[i]); // Logga talet
//   if (numbers[i] > 10) {
//     break; // Avbryt loopen om talet är större än 10
//   }
//   i++; // Öka indexet för att gå till nästa tal
// }

// #28
// const mixedNumbers = [3, -5, 12, -1, 8, -6];
// let negativeCount = 0; // För att hålla reda på antalet negativa tal
// let i = 0;

// while (i < mixedNumbers.length) {
//   if (mixedNumbers[i] < 0) {
//     negativeCount++; // Öka räknaren om talet är negativt
//   }
//   i++; // Gå till nästa tal
// }

// console.log(negativeCount); // -5, -1, -6 = 3st

// #29
// const words = ["banana", "apple", "kiwi", "strawberry", "peach"];

// for (let i = 0; i < words.length; i++) {

// console.log(words[i] + ": " + words[i].length); // Logga order och dess längd
//   banana: 6;
//   apple: 5;
//   kiwi: 4;
//   strawberry: 10;
//   peach: 5;

// #30
// const words = ["banana", "apple", "kiwi", "strawberry", "peach"];
// let firstLetters = ""; // Starta en tom sträng

// for (let i = 0; i < words.length; i++) {
//   firstLetters += words[i][0]; // Lägg till första bokstaven från varje ord
// }

// console.log(firstLetters); // baksp

// #31
// const numbers = [5, 8, 12, 20, 3];
// let sum = 0; // För att hålla reda på summan av de loggade talen
// let i = 0;

// while (i < numbers.length && sum <= 25) {
//   sum += numbers[i]; // Lägg till det aktuella talet till summan
//   console.log(numbers[i]); // 5, 8, 12, stannar på 20
//   i++; // Gå vidare till nästa tal
// }

// #32
// const mixedNumbers = [3, -5, 12, -1, 8, -6];
// let sum = 0;

// for (const num of mixedNumbers) {
//   sum += num; // Lägg till num till summan
// }

// console.log(sum); // 3 + (-5) + 12 + (-1) + 8 + (-6) = 11

// #33
// const temperatures = [15, 22, 19, 30, 28, 18, 25];
// let highestTemperature = temperatures[0]; // Starta med den första temperaturen som högsta
// let highestIndex = 0; // Indexet för den högsta temperaturen

// for (let i = 1; i < temperatures.length; i++) {
//   if (temperatures[i] > highestTemperature) {
//     highestTemperature = temperatures[i]; // Uppdatera den högsta temperaturen
//     highestIndex = i; // Uppdatera indexet för den högsta temperaturen
//   }
// }

// console.log("Högsta temperaturen: " + highestTemperature + "°C"); // 30
// console.log("Index för högsta temperaturen: " + highestIndex); // 3

// #34
// const words = ["banana", "apple", "kiwi", "strawberry", "peach"];
// let count = 0; // För att hålla reda på antalet ord med fler än fem bokstäver

// for (let i = 0; i < words.length; i++) {
//   if (words[i].length > 5) {
//     count++; // Öka räknaren om ordet har fler än fem bokstäver
//   }
// }

// console.log(count); // 2 ord. banana & strawberry

// #35
// const numbers = [5, 8, 12, 20, 3];
// let i = 0;

// while (i < numbers.length) {
//   if (numbers[i] % 2 !== 0) {
//     // Kontrollera om talet är udda
//     console.log(numbers[i]); // 5
//     break; // Avbryt loopen vid första udda talet
//   }
//   i++; // Gå vidare till nästa tal
// }

// *** DETTA VAR SVÅRT *** //
