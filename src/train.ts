// /*H-TASK:

// Shunday function tuzing, u string qabul qilib teskari qilib return qilsin
// MASALAN: gerReverse("hello") return qiladi "olleh"

const gerReverse = (str: string) => {
  return str.split("").reverse().join("");
};

console.log(gerReverse("hello"));

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