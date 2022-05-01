const myAge = 40;                         //defining myAge and assigning it 40
let earlyYears = 2;                     //a variable which may change
earlyYears *= 10.5;       
let laterYears = myAge -2;              //a variable laterYears that may change
laterYears *=4;                         //laterYears is multiplied by 4
console.log(earlyYears, laterYears);
let myAgeInDogYears = earlyYears+laterYears;        //converting my age to dog years by adding earlyYears and LaterYears
let myName = 'Kassim'.toLocaleLowerCase();      //Kassim is made all lowecase and assigned to myName
console.log(`My is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
