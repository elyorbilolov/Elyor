//5#. O'zgaruvchilar

/* let number = 10;
const borderColor = 'red';

const person = {
    name: 'Elyor',
};

person.name = 'Bilol';
console.log(person);

// Old version

console.log(clientName);
var clientName = 'Samar'; */




//6#. Qat'iy rejim

/* "use strict";

const number = 10;
const clientName = 'Samar';

console.log(number); */




//7#. Ma'lumot turlari
/*
1) primitive      2) Object

Boolean       /   Array
null         /    Object
undefined   /     function
number     /      RegEx
String    /       Date
Symbol
 */
/*
"use strict";

//Number
let number = 5.6;  // Data Type = Number
console.log(-8 / 0); // Infinity
console.log('Samar' * 8); // Nan

// String
const clientName = 'Samar';

//Boolean
const isMarried = false;
const isCircleEarth = true;
// true = xa | to'g'ri
// false = yoq | notog'ri

//null (yo'q o'zgaruvchini chaqirsek null o'zgaruvchisi chiqadi)
console.log(clientAge);

// undefined (o'zgaruvchi bor lekin malumoti yoq bolsa undefined chiqadi)
let und;
console.log(und);

// Object

const thief = {
    //key: value
    age: 30, //number
    jacket: 'black', //string
    isLong: false //boolean
};
console.log(thief.age);

//array
const colors = ['red', 'black', 'green', 10, [], {}];
console.log(colors[1]);
 */




//#8. Foydalanuvchi bilan oddiy muloqot
/*
'use strict';

alert('Hello Java');

const place = confirm('Are you here?');
console.log(place);

const currentPlace = prompt('Whera are you?', 'Samara');
console.log(currentPlace);

const age = +prompt('How old are you?', '18');
console.log(age);
 */



//#9. Interpolatsiya
/*
'use strict';

const channel = prompt('What is your favourite youtuber');
console.log(`https://youtube.com/${channel}`);

const user = 'Elyor';
const job = 'JavaScript developer';

console.log(`User name is ${user}, he is ${job}`);
 */



//#10. Operatorlar
/*
'use strict';

console.log(6 + 'g');

let incr = 10;
let decr = 10;

console.log(++incr);
console.log(decr--);

console.log(10 % 3);

console.log(5 * 5 == '25'); //qiymatni
console.log(5 * 5 === '25'); // qiymat va malumot turini

// && = va || = yoki

const isAge = true;
const isClose = true;
const isChecked = false;

console.log(isAge && isClose && !isChecked);

console.log(2 + 2 * 2 !== 6);
 */

//#11. Github bilan ishlash

//#12. Amaliyot, uyga vazifa

/*
const numberOfSeries = +prompt("Neshta serial ko'rdingiz?", "");

const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    privat: false
};



const a = prompt('Oxirgi ko\'rgan serialingiz'),
    b = prompt('Nechi baxo berasiz?'),
    c = prompt('Oxirgi ko\'rgan serialingiz'),
    d = prompt('Nechi baxo berasiz?');

seriesDB.series[a] = b;
seriesDB.series[c] = d;

console.log(seriesDB);
 */




//#13. Shartli operatorlar
/*
const age = +prompt("How old are you?", "");

if (age > 25) {
    console.log('Horror films');
} else if (age >= 18 && age <= 25) {
    console.log('Boyevik films');
} else {
    console.log('Carton');
}

// age > 25 ? console.log('Horror films') : console.log('Carton');

const color = 'red';

switch (color) {
    case 'red':
        console.log('Stop');
        break;
    case 'green':
        console.log('Goo');
        break;
    case 'yellow':
        console.log('Slowly');
        break;
    default:
        console.log('Traffic jam');
        break;
}
 */




//#14. Tsikl
/*
// let starNum = 1;

// while (starNum <= 10) {
//     console.log(starNum);
//     starNum++;
// }

// do {
//     console.log(starNum);
//     starNum++;
// } while (starNum <= 10);

for (let i = 1; i <= 10; i++) {
    if (i === 8) {
        // break; //toxtatadi
        continue; // formulada berilgan soni korsatmidi
    }
    console.log(i);
}
 */



//#15. Amaliyot, uyga vazifa. Tskil
/* 
const numberOfSeries = +prompt("Neshta serial ko'rdingiz?", "");

const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Oxirgi ko\'rgan serialingiz?'),
        b = prompt('Nechi baxo berasiz?');

    if (a != null && b != null && a != '' && b != '') {
        seriesDB.series[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}


console.log(seriesDB);



if (seriesDB.count < 5) {
    console.log('Kam serial ko\'ribsiz');
} else if (seriesDB.count >= 5 && seriesDB.count <= 10) {
    console.log('Siz classik tomoshabin ekansiz');
} else {
    console.log('Siz serialchi zvezda ekansiz');
}
 */

