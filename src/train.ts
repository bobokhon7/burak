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

// I-TASK:

// Shunday function tuzing, unga string argument pass bolsin.
// Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

const getDigits = (str: any) => {
  let newArr = [];
  let arrConvert = str.split("").map(Number);

  for (let i = 0; i < arrConvert.length; i++) {
    if (!Number.isNaN(arrConvert[i])) {
      newArr.push(arrConvert[i]);
    }
  }

  return newArr.join("");
};

console.log(getDigits("m14i1t"));

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
