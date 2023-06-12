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

// 1) primitive      2) Object
/* 
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
let number = 5.6; // Data Type = Number
console.log(-8 / 0); // Infinity
console.log("Samar" * 8); // Nan

// String
const clientName = "Samar";

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
    jacket: "black", //string
    isLong: false, //boolean
};
console.log(thief.age);

//array
const colors = ["red", "black", "green", 10, [], {}];
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
    private: false
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
    private: false
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

if (seriesDB.count < 5) {
    console.log('Kam serial ko\'ribsiz');
} else if (seriesDB.count >= 5 && seriesDB.count <= 10) {
    console.log('Siz classik tomoshabin ekansiz');
} else {
    console.log('Siz serialchi zvezda ekansiz');
}

console.log(seriesDB);
 */

//#16. Funksiya, ES6
/*
//Function declaration

function calc(a, b) {
    return a + b;
}
const sumOfAandB = calc(10, 5);
console.log(sumOfAandB);


//function expression

const logger = function () {
    console.log('Hello world');
};
logger();


//Arrow function

const calcu = (a, b) => a + b;
console.log(calcu(10, 1));
 */

//#17. Metod va Xususiyatlar
/*
const user = 'Elyor';
const arr = [1, 2, 3, 4];
console.log(user[2]);
console.log(user.toUpperCase());
console.log(user.toLowerCase());
console.log(user);

const greeting = 'Hello world';
console.log(greeting.indexOf('d'));
console.log(greeting.slice(6));
console.log(greeting.substring(2, 8));

const num = 8.3;
console.log(Math.round(num));

const borderWidth = '13.8px';
console.log(parseInt(borderWidth));
console.log(parseFloat(borderWidth));
 */

//#18. Amaliyot, uyga vazifa. Funksiya

/*
let numberOfSeries;

function starApp() {
    numberOfSeries = +prompt("Neshta serial ko'rdingiz?", "");


    while (numberOfSeries == '' || numberOfSeries == null || isNaN(numberOfSeries)) {
        numberOfSeries = +prompt("Neshta serial ko'rdingiz?", "");
    }
}

starApp();

const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMySeries() {
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
}

rememberMySeries();


function detectLevelSeries() {
    if (seriesDB.count < 5) {
        console.log('Kam serial ko\'ribsiz');
    } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
        console.log('Siz classik tomoshabin ekansiz');
    } else if (seriesDB.count >= 10) {
        console.log('Siz serialchi zvezda ekansiz');
    } else {
        console.log('Error');
    }
}

detectLevelSeries();

function showDb(hidden) {
    if (!hidden) {
        console.log(seriesDB);
    }
}
showDb(seriesDB.private);

function writeGenres() {
    for (let i = 0; i <= 2; i++) {
        const genre = prompt(`Yaxshi ko‘rgan janringiz ${i + 1}`);
        seriesDB.genres[i] = genre;
    }
}

writeGenres();
 */

//#19. Callback
/*
function first(cb) {
    setTimeout(() => {
        console.log(1);
        cb();
    }, 1000);
}

function second() {
    console.log(2);
}
first(second);


function edu(subject, Callback) {
    console.log(`I wanna teach ${subject}`);
    Callback();
}

function done() {
    console.log('That is great');
}

edu('JavaScript', done);
 */

//#20. Object. Destruptizatsiya

/*
const theif = {
    jacket: 'black',
    height: 1.7,
    colors: {
        hair: 'gray',
        style: 'curley',
    },
    howOut: function () {
        console.log('Fast with help doors');
    },
};
theif.howOut();

const { hair, style } = theif.colors;

console.log(hair);
console.log(style);



console.log(Object.keys(theif).length); // massivga olib beradi

for (let key in theif) {
   if (typeof theif[key] === 'object') {
        for (let i in theif[key]) {
            console.log(`Property ${i} has value ${theif[key][i]}`);
        }
    } else {
        console.log(`Property ${key} has value ${theif[key]}`);
    }

}
 */

//#21. Massivlar
/* 
const arr = [4, 22, 1, 31];

arr.sort((a, b) => a - b);
console.log(arr);

function compareFn(a, b) {
    return a - b;
}

arr[99] = 0;

arr.forEach(function (item, index, array) {
    console.log(`${index}: ${item} into arr ${array}`);
});

arr.pop();
arr.push(7);

arr.shift();
arr.unshift(0);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

const movies = prompt(`What's your favourite movies`, '');
const userMovies = movies.split(", ");
userMovies.sort(); // sartirovka
console.log(userMovies.join("- "));
 */
//#22. Clonlash, ES6
/*
let x = 10;
let y = x;
y = y + 5;
console.log(x);
console.log(y);


let isMarried = false;
let isArray = isMarried;
isArray = true;
console.log(isMarried);
console.log(isArray);


const number = {
    x: 10,
    y: 5,
};
const newNumber = number; // havola
newNumber.x = 15;
console.log(number);
console.log(newNumber);



function nusxaObj(obj) {
    let objNusxa = {};

    for (let key in obj) {
        objNusxa[key] = obj[key];
    }
    return objNusxa;
}

const numbers1 = {
    x: 10,
    y: 5,
    z: {
        a: 1,
        b: 2,
    },
};

const newNumbers1 = nusxaObj(numbers1);

newNumbers1.x = 15;
newNumbers1.z.a = 10;

console.log(newNumbers1);
console.log(numbers1);



const numbers2 = {
    x: 10,
    y: 5,
};

const addNumber2 = {
    z: 15,
};

const allNumbers2 = Object.assign(numbers2, addNumber2);
console.log(allNumbers2);



const arr = [1, 2, 3];
const numbers3 = arr.slice();
numbers3[1] = 'Samar';
console.log(arr);
console.log(numbers3);

const liverpool = ['Salah', 'Mane'];
const manCity = ['Mahrez'];

const mixPlayer = [...liverpool, ...manCity];
console.log(mixPlayer);
 */

//#23. Spread operator

/*
const calc = [1, 2, 3];

function logger(x, y, z) {
    console.log(x + y + z);
}

logger(...calc);

const arr = ['x', 'y'];
const newArr = [...arr];
console.log(newArr);

const numbers = {
    x: 10,
    y: 5
};

const newNumbers = { ...numbers };
console.log(newNumbers);
console.log(numbers);
 */

//#24. OOP asoslari

/*
let car = {
    mator: '1.25',
    color: 'red',
    isAirbag: true,
    isSpeed: function () {
        console.log(320);
    },
};

let gm = {
    isAirbag: false,
};

// gm.__proto__ = car;
// console.log(gm.color);
// gm.isSpeed();


//Object.setPrototypeOf(gm, car);

let bmw = Object.create(car);

console.log(bmw);
 */

//#25. Amaliyot, uyga vazifa. OOP

/*
const seriesDB = {
    count: 0,
    series: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        seriesDB.count = +prompt("Neshta serial ko'rdingiz?", "");


        while (seriesDB.count == '' || seriesDB.count == null || isNaN(seriesDB.count)) {
            seriesDB.count = +prompt("Neshta serial ko'rdingiz?", "");
        }
    },

    rememberMySeries: function () {
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
    },

    detectLevelSeries: function () {
        if (seriesDB.count < 5) {
            console.log('Kam serial ko\'ribsiz');
        } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
            console.log('Siz classik tomoshabin ekansiz');
        } else if (seriesDB.count >= 10) {
            console.log('Siz serialchi zvezda ekansiz');
        } else {
            console.log('Error');
        }
    },

    showDb: function () {
        if (!seriesDB.private) {
            console.log(seriesDB);
        }
    },

    visibleDB: function () {
        if (seriesDB.private) {
            seriesDB.private = false;
        } else {
            seriesDB.private = true;
        }
    },

    writeGenres: function () {
        //     for (let i = 0; i < 3; i++) {
        //         let genre = prompt(`Yaxshi ko'rgan janiringiz ${i + 1}`);
        //         if (genre === '' || genre === null) {
        //             console.log(`Siz notog'ri ma'lumot kiritdingiz`);
        //             i--;
        //         } else {
        //             seriesDB.genres[i] = genre;
        //         }
        //     }
        // }

        let genres = prompt(`Yaxshi ko'rgan janiringizni vergil yordamida yozing`).toLowerCase();
        console.log(genres);
        if (genres === '' || genres === null) {
            console.log(`Siz notog'ri ma'lumot kiritdingiz`);
        } else {
            seriesDB.genres = genres.split(', ');
            seriesDB.genres.sort();
        }

        seriesDB.genres.forEach((item, index) => {
            console.log(`Yaxshi ko'rgan janiringiz ${index + 1} - nomi ${item}`);
        });
    }
};
 */

//#26. Dynamic typing
/*
// to string
// 1-)
console.log(typeof String(4));
// 2-)
console.log(typeof ('Elyor' + 25));

const youtubeChannel = 10;
console.log(`youtube.com/channel/` + youtubeChannel);



// to number
// 1-)
console.log(typeof Number(4));
// 2-)
console.log(typeof + '5');
// 3-)
console.log(typeof parseInt('15'));



// to boolean

// '', null, undefined, NaN = xar doim false

let age = 0;
if (age) {
    console.log('g');
}

let age1 = 18;
if (age1) {
    console.log('g');
}

console.log(typeof Boolean('4'));
console.log(typeof !!'4');
 */

// to boolean

// '', null, undefined, NaN = xar doim false

//#27. DOM bilan ishlash

/*
//Old way
const box = document.getElementById('Box');
console.log(box);

const buttons = document.getElementsByTagName('button');
console.log(buttons);

const circle = document.getElementsByClassName('circle');
console.log(circle);

//New way

const wrapper = document.querySelector('.wrapper');
console.log(wrapper);

const hearts = wrapper.querySelectorAll('.heart');
console.log(hearts);

hearts.forEach((item) => {
    console.log(item);
});
 */

//#28. Metodlar bilan ishlash
/*
const box = document.querySelector('#box');
const buttons = document.querySelectorAll('button');
const circles = document.querySelectorAll('.circle');
const circle = document.querySelector('.circle');
const hearts = document.querySelectorAll('.heart');
const circleWrapper = document.querySelector('.circle__wrapper');

box.style.backgroundColor = 'red';
box.style.cssText = 'background-color: red; width: 100px; height: 100px';

buttons[0].style.width = '100px';
circles[1].style.backgroundColor = 'yellow';
circle.style.backgroundColor = 'yellow';

// hearts.forEach((item) => {
//     item.style.backgroundColor = 'gray';
// });

const btn = document.createElement('button');
// const text = document.createTextNode('I am text');

document.body.append(btn);

const myCircle = document.createElement('div');

myCircle.classList.add('circle');

//circleWrapper.append(myCircle);
// circleWrapper.before(myCircle);
// circleWrapper.after(myCircle);
// circles[0].before(myCircle);
// circles[1].remove();
// circles[1].replaceWith(myCircle);

// circleWrapper.append(myCircle);
// myCircle.innerHTML = '<pre>E</pre>';
// myCircle.textContent = 'E';
// circleWrapper.insertAdjacentHTML('beforeend', '<pre>E</pre>');
 */

// #29. Amaliyot, uyga vazifa. DOM

/*
const adv = document.querySelectorAll('.promo__adv img'),
    wrapper = document.querySelector('.promo__bg'),
    genre = wrapper.querySelector('.promo__genre'),
    seriesList = document.querySelector('.promo__interactive-list');

const seriesDB = {
    series: [
        'Omar',
        'The Final Legacy',
        'Ertugrul',
        'Magnificent Century',
        'The Great Seljuks: Guardians...',
    ],
};

adv.forEach((item) => {
    item.remove();
});

genre.textContent = 'comedy';

wrapper.style.backgroundImage = 'url("img/1.jpg")';

seriesList.innerHTML = '';

seriesDB.series.forEach((item, idx) => {
    seriesList.innerHTML += `
    <li class="promo__interactive-item">${idx + 1} ${item}
      <div class="delete"></div>
    </li>
  `;
});
 */

// #30. Xodisalar bilan ishlash

/* const btn = document.querySelector('#btn');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', () => {
    alert('click');
});

btn.addEventListener('click', () => {
    alert('click1');
});

btn.addEventListener('mouseenter', (event) => {
    console.log(event.target);
    event.target.remove();
    alert('Hover');
});

let i = 0;
const addElement = (evnt) => {
    i++;
    if (i === 3) {
        btn.removeEventListener('click', addElement);
    }
    console.log(i);
};

btn.addEventListener('click', addElement);

const cb = (e) => {
    console.log(e.currentTarget);
};

btn.addEventListener('click', cb);
overlay.addEventListener('click', cb);

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Link');
});

const btns = document.querySelectorAll('button');

const logger = () => {
    console.log(1);
};

btns.forEach((item) => {
    item.addEventListener('click', logger);
}); */

// #31. Navigatsiya DOM bo'yicha

/* console.log(document.head);
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

console.log(document.querySelector('#btn').parentElement);

console.log(document.querySelector('[data-current="b"]').nextElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
} */

//#32. Amaliyot, uyga vazifa. DOM xodisa
/* 
document.addEventListener("DOMContentLoaded", () => {
    const adv = document.querySelectorAll(".promo__adv img"),
        wrapper = document.querySelector(".promo__bg"),
        genre = wrapper.querySelector(".promo__genre"),
        seriesList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector("form.add"),
        inputVal = addForm.querySelector(".adding__input"),
        checkbox = addForm.querySelector("[type='checkbox']");

    const seriesDB = {
        series: [
            "Omar",
            "The Final Legacy",
            "Ertugrul",
            "Magnificent Century",
            "The Great Seljuks: Guardians...",
        ],
    };

    addForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let newSeries = inputVal.value;
        const favourite = checkbox.checked;

        if (newSeries) {
            if (newSeries.length > 18) {
                newSeries = `${newSeries.substring(0, 18)}...`;
            }

            if (favourite) {
                console.log("Sevimli serial qo’shilidi");
            }

            seriesDB.series.push(newSeries);
            sortArr(seriesDB.series);

            createSeriesList(seriesDB.series, seriesList);
        }

        event.target.reset();
    });

    const deleteAdv = (arr) => {
        adv.forEach((item) => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = "comedy";

        wrapper.style.backgroundImage = 'url("img/1.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createSeriesList(series, parent) {
        parent.innerHTML = "";
        sortArr(series);

        series.forEach((item, idx) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${idx + 1} ${item}
          <div class="delete"></div>
        </li>
      `;
        });

        document.querySelectorAll(".delete").forEach((trash, idx) => {
            trash.addEventListener("click", () => {
                trash.parentElement.remove();
                seriesDB.series.splice(idx, 1);

                createSeriesList(series, parent);
            });
        });
    }

    sortArr(seriesDB.series);
    deleteAdv(adv);
    makeChanges();
    createSeriesList(seriesDB.series, seriesList);
});
 */

// #33. Async, defer. Dynamic scriptlar

/* const p = document.querySelectorAll("p");
console.log(p);

function loadScript(src) {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript("./second.js");
loadScript("/third.js"); */

//#34. Developer tools. Xatolarni kuzatish
/* 
function sayHello() {
    console.log("Good morning");
}
sayHello();

function sayBye() {
    console.log("Good bye");
}
sayBye();

const arr = [1, 34, 14, -56, 98],
    sorted = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(sorted); */

// #35. Classlist

// const btns = document.querySelectorAll("button");

//console.log(btns[0].classList.length); //class soni
//console.log(btns[0].classList.item(0)); // nomi chiqaradi

// btns[1].classList.add("blue", "some"); // qoshadi
// btns[0].classList.remove("blue"); // ochiradi
// btns[0].classList.toggle("blue"); // bor bosa yoq + yoq bosa bor

/* btns[0].classList.add("red");

if (btns[0].classList.contains("red")) {
    //class nomini qidiradi
    console.log("yeap");
} */
/* 
btns[0].addEventListener("click", () => {
    // if (!btns[1].classList.contains("red")) {
    //     btns[1].classList.add("red");
    // } else {
    //     btns[1].classList.remove("red");
    // }
    // btns[1].classList.toggle("red");
}); */

// #36. Delegatsiya
/* 
const wrapper = document.querySelector(".btn-block"),
    btns = document.querySelectorAll("button");

btns[0].addEventListener("click", () => {
    btns[1].classList.toggle("red");
});

wrapper.addEventListener("click", (event) => {
    if (event.target && event.target.matches("button.red")) {
        console.log("btn click");
    }
});

btns.forEach((item) => {
    item.addEventListener("click", () => {
        console.log("clicked");
    });
});

const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);
 */

// #37. Loyiha, Tab
/* 
window.addEventListener("DOMContentLoaded", () => {
    const tabsParent = document.querySelector(".tabheader__items"),
        tabs = document.querySelectorAll(".tabheader__item"),
        tabsContent = document.querySelectorAll(".tabcontent");

    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.classList.add("hide");
            item.classList.remove("show", "fade");
        });

        tabs.forEach((item) => {
            item.classList.remove("tabheader__item_active");
        });
    }
    function showTabContent(i = 0) {
        tabsContent[i].classList.add("show", "fade");
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add("tabheader__item_active");
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (event) => {
        const target = event.target;
        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, index) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(index);
                }
            });
        }
    });
});
 */

// #38. Animatsiya. setTimeOut & setInterval

/* const btn = document.querySelector("#btn");

function myAnimation() {
    const car = document.querySelector(".car");
    let pos = 0;

    const timerId = setInterval(frame, 10);

    function frame() {
        if (pos === 700) {
            clearInterval(timerId);
        } else {
            pos++;
            car.style.left = pos + "px";
        }
    }
}

btn.addEventListener("click", myAnimation); */

// #39. Loyiha loader

/* window.addEventListener("DOMContentLoaded", () => {
    loader = document.querySelector(".loader");

    // Loader

    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 2000);
}); */

// #40. Date bilan ishlash
/* 
let start = new Date();

for (let i = 0; i < 100000; i++) {
    let sone = i ** 3;
}

let end = new Date();

console.log(start.getTime());
console.log(end.getTime());

alert(`Loop competed in ${end - start} milliseconds`);
 */

// #41. Loyiha. Chegara
// Timer
/* 
const deadline = "2023-06-13";

function getTimeRemaining(endtime) {
    const timer = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(timer / (1000 * 60 * 60 * 24)),
        hours = Math.floor((timer / (1000 * 60 * 60)) % 24),
        minutes = Math.floor((timer / 1000 / 60) % 60),
        seconds = Math.floor((timer / 1000) % 60);

    return { timer, days, hours, minutes, seconds };
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector("#days"),
        hours = timer.querySelector("#hours"),
        minutes = timer.querySelector("#minutes"),
        seconds = timer.querySelector("#seconds"),
        timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.timer <= 0) {
            clearInterval(timeInterval);
        }
    }
}
setClock(".timer", deadline); */
