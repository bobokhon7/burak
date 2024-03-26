/* Project Standards
 - Logging Standards
 - Naming Standards
     function,method,variable => Camel Case
     clas => Poscal
     folder => KEBAB
     Css => SNAKE

 - Error handling


*/

/*
Traditional api
Rest Api
GraphQL Api
*/

/*
Traditional Front-End => BSSR => Backend Server Side Rendering (Admin) => EJS

Modern Front-End =>SPA => Single Page Application => React (User)
*/

////////////////////////// Validation ////////////////////
/*
Frontend Validation
Backend Validation
DataBase Validation
*/

// R-TASK:

// Shunday function yozing, u string parametrga ega bolsin.
// String "1+2" holatda pass qilinganda string ichidagi sonlar
// yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;

const calculate = (str: any) => {
  let newArr = str.split("").map(Number);
  let newNumArr = [];

  for (let i = 0; i < newArr.length; i++) {
    if (!isNaN(newArr[i])) {
      newNumArr.push(newArr[i]);
    }
  }

  return newNumArr.reduce((a: any, b: any) => a + b);
};

console.log(calculate("1+2+3"));

// Q-TASK:

// Shunday function yozing, u 2 ta parametrgga ega bolib
// birinchisi object, ikkinchisi string. Agar string parametr
// objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model")
// return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

// const hasProperty = (obj: any, str: any) => {
//   let newArr = [];
//   let newArr1 = [];
//   for (const key of Object.keys(obj)) {
//     if (key === str) {
//       newArr.push(key);
//     } else {
//       newArr1.push(key);
//     }
//   }
//   return newArr.length === 0 ? false : true;
// };

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));

// P-TASK:

// Shunday function yozing, u object qabul qilsin va
//  arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// const objectToArray = (obj: any) => {
//   return Object.entries(obj);
// };

// console.log(objectToArray({ a: 10, b: 20 }));

// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat
// array qabul qilsin va array ichidagi sonlar yigindisini
// hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

// const calculateSumOfNumbers = (arr: any) => {
//   let newArr = arr.filter((num: any) => {
//     return typeof num === "number";
//   });

//   return newArr.reduce((a: any, b: any) => a + b);
// };
// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));
// // N-TASK:

// Shunday function yozing, u string qabul qilsin va string
// palindrom yani togri oqilganda ham, orqasidan oqilganda ham
// bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// const palindromCheck = (str: any) => {
//   const changeStringToArr = str.split("").reverse().join("");

//   if (str == changeStringToArr) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(palindromCheck("bob"));

// L-TASK
// function reverseSentence(str: string) {
//   const arr = str.split(" ");
//   let reversedArr = [];

//   for (const word of arr) {
//     reversedArr.push(word.split("").reverse().join(""));
//   }

//   return reversedArr.join(" ");
// }

// console.log(reverseSentence("we like Coding!"));
// K-TASK:

// Shunday function yozing, u string qabul
// qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// const countVowels = (str: any) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let letter of str.toLowerCase()) {
//     if (vowels.includes(letter)) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countVowels("string"));

// J-TASK:

// Shunday function yozing, u string qabul qilsin
// va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

// function findLongestWord(str: any) {
//   const arr = str.split(" ");

//   return arr.sort((a: any, b: any) => b.length - a.length)[0];
// }
// const result = findLongestWord("I come from Uzbekistan");
// console.log("result:", result);

// I-TASK:

// Shunday function tuzing, unga string argument pass bolsin.
// Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

// const getDigits = (str: any) => {
//   let newArr = [];
//   let arrConvert = str.split("").map(Number);

//   for (let i = 0; i < arrConvert.length; i++) {
//     if (!Number.isNaN(arrConvert[i])) {
//       newArr.push(arrConvert[i]);
//     }
//   }

//   return newArr.join("");
// };

// console.log(getDigits("m14i1t"));

// H-TASK:

// shunday function tuzing, u integerlardan iborat arrayni argument
// sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// const getPositive = (arr: any) => {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr.join("");
// };
// console.log(getPositive([1, -4, 2]));

// /*H-TASK:

// Shunday function tuzing, u string qabul qilib teskari qilib return qilsin
// MASALAN: gerReverse("hello") return qiladi "olleh"

// const gerReverse = (str: string) => {
//   return str.split("").reverse().join("");
// };

// console.log(gerReverse("hello"));

// /*G-TASK:

// Shunday function tuzingki unga integerlardan iborat array pass
// bolsin va function bizga osha arrayning eng katta qiymatiga
// tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

// const getHighestIndex = (num: number[]) => {
//   let getHigestNum = Math.max(...num);
//   return num.indexOf(getHigestNum);
// };

// console.log(getHighestIndex([5, 21, 12, 21, 8]));
