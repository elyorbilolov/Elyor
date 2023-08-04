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
/* 
// const btns = document.querySelectorAll("button");

//console.log(btns[0].classList.length); //class soni
//console.log(btns[0].classList.item(0)); // nomi chiqaradi

// btns[1].classList.add("blue", "some"); // qoshadi
// btns[0].classList.remove("blue"); // ochiradi
// btns[0].classList.toggle("blue"); // bor bosa yoq + yoq bosa bor

// btns[0].classList.add("red");

// if (btns[0].classList.contains("red")) {
//     //class nomini qidiradi
//     console.log("yeap");
// }

// btns[0].addEventListener("click", () => {
//     // if (!btns[1].classList.contains("red")) {
//     //     btns[1].classList.add("red");
//     // } else {
//     //     btns[1].classList.remove("red");
//     // }
//     // btns[1].classList.toggle("red");
// }); */

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
    let days, hours, minutes, seconds;
    const timer = Date.parse(endtime) - Date.parse(new Date());

    if (timer <= 0) {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    } else {
        (days = Math.floor(timer / (1000 * 60 * 60 * 24))),
            (hours = Math.floor((timer / (1000 * 60 * 60)) % 24)),
            (minutes = Math.floor((timer / 1000 / 60) % 60)),
            (seconds = Math.floor((timer / 1000) % 60));
    }
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

// #43. Window, Doc bilan ishlash

/* const box = document.querySelector(".box"),
    btn = document.querySelector("button");

const width = box.clientWidth;
const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

// const height = box.scrollHeight;

// btn.addEventListener("click", () => {
//     // box.style.height = box.scrollHeight + "px";
//     console.log(box.scrollTop);
// });

// const style = window.getComputedStyle(box);

// console.log(style);

// console.log(document.documentElement.clientWidth);
 */

// #44. Loyiha. Modal
/* 
window.addEventListener("DOMContentLoaded", () => {
    const tabsParent = document.querySelector(".tabheader__items"),
        tabs = document.querySelectorAll(".tabheader__item"),
        tabsContent = document.querySelectorAll(".tabcontent"),
        loader = document.querySelector(".loader");

    // Loader
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 2000);

    // Preview
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
    // Timer

    const deadline = "2024-06-13";

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const timer = Date.parse(endtime) - Date.parse(new Date());

        if (timer <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            (days = Math.floor(timer / (1000 * 60 * 60 * 24))),
                (hours = Math.floor((timer / (1000 * 60 * 60)) % 24)),
                (minutes = Math.floor((timer / 1000 / 60) % 60)),
                (seconds = Math.floor((timer / 1000) % 60));
        }
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
    setClock(".timer", deadline);

    // Modal

    const modalTrigger = document.querySelectorAll("[data-modal]"),
        modal = document.querySelector(".modal"),
        modalCloseBtn = document.querySelector("[data-close]");

    function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.overflow = "";
    }

    modalTrigger.forEach((item) => {
        item.addEventListener("click", openModal);
    });

    modalCloseBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if (e.target == modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 3000);

    function showModalByScroll() {
        if (
            window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight
        ) {
            openModal();
            window.removeEventListener("scroll", showModalByScroll);
        }
    }
    window.addEventListener("scroll", showModalByScroll);
}); */

//#46. Function constructor

/* function Car(name, color, mph) {
    this.name = name;
    this.color = color;
    this.mph = mph;
    this.isAirbag = true;
    this.speed = function () {
        console.log(`Speed of car ${this.name} is ${this.mph}`);
    };
}

Car.prototype.sayHello = function () {
    console.log(`Car name of ${this.name} say hello`);
};

const bmw = new Car("bmw", "red", 32);
const merc = new Car("merc", "black", 10);

bmw.sayHello();
merc.sayHello();

bmw.speed();
merc.speed();

console.log(bmw);
console.log(merc); */

// #47. Context this & Closure
/* 
"use strict";

// const this - xar doim nimagadur qaram(o'siladi);

// ************** --------------- **************

// 1-) Oddiy functionni contexti ya'ni this xar doim window global objectga qaram bo'ladi
// yani osiladi. Agarda qatiy rejim yoqu bo'lsa (use strict) context undefinedga teng

// function logger(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// logger(1, 2);

// ************** --------------- **************
// 2-) Context this objectni ichidagi metodda - objectni o'ziga teng

// const obj = {
//     x: 10,
//     y: 5,
//     sum: function () {
//         console.log(this);
//     },
// };

// obj.sum();

// ************** --------------- **************
// 3-) Context this functioni konstruktorda yangi objectni ekzempyariga teng

// function Car(name, color) {
//     this.name = name;
//     this.color = color;
//     this.isAirbag = true;
// }
// const bmw = new Car("BMW", "Black");
// console.log(bmw);

// ************** --------------- **************
//Closure
// const a = 4;
// function log() {
//     console.log(a);
// }
// log(); */

// #48. Call, Apply & Bind
/* 
// //1
// function logger(speed) {
//     console.log(this);
//     console.log(
//         `My car is ${this.name} color is ${this.color}. Max speed ${speed}`
//     );
// }

// const car = {
//     name: "BMW",
//     color: "Black",
// };

// logger.call(car, 200);
// logger.apply(car, [300]);

//2
// function calc(number) {
//     return this * number;
// }

// const multilpe2 = calc.bind(2);
// console.log(multilpe2(10));
// console.log(multilpe2(15));

//3
// const btn = document.querySelector("button");

// btn.addEventListener("click", (e) => {
//     e.target.style.width = "400px";
// });

//4
// const obj = {
//     x: 10,
//     y: 15,
//     sum: function () {
//         const logger = () => {
//             console.log(this.y);
//         };
//         logger();
//     },
// };
// obj.sum();

// strelkali funksiya xech qanday contextga ega emas
// xar doim o'zini tepasidagi contextga qaram boladi */

// #49. Class ES6
/* class Car {
    constructor(name, color, speed) {
        (this.name = name), (this.color = color), (this.speed = speed);
    }

    calcSpeed() {
        return this.speed * 100;
    }
}

// const bmw = new Car("BMW", "Black", 200);
// const merc = new Car("MERC", "White", 100);

// console.log(bmw.calcSpeed());
// console.log(merc);

class Spark extends Car {
    constructor(name, color, speed, isAirbag, extraBallon) {
        super(name, color, speed),
            (this.isAirbag = isAirbag),
            (this.extraBallon = extraBallon);
    }

    logger() {
        console.log(
            `Name of car ${this.name}, color is ${this.color}. Is air bag there ${this.isAirbag}. Are there extra ballon ${this.extraBallon}`
        );
    }
}
const aboutcar = new Spark("Spark", "White", 200, true, 5);

aboutcar.logger();
console.log(aboutcar.calcSpeed());
console.log(aboutcar);
 */

// #50. Loyiha class

window.addEventListener("DOMContentLoaded", () => {
    const tabsParent = document.querySelector(".tabheader__items"),
        tabs = document.querySelectorAll(".tabheader__item"),
        tabsContent = document.querySelectorAll(".tabcontent"),
        loader = document.querySelector(".loader");

    // Loader
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 2000);

    // Preview
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
    // Timer

    const deadline = "2024-06-13";

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const timer = Date.parse(endtime) - Date.parse(new Date());

        if (timer <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            (days = Math.floor(timer / (1000 * 60 * 60 * 24))),
                (hours = Math.floor((timer / (1000 * 60 * 60)) % 24)),
                (minutes = Math.floor((timer / 1000 / 60) % 60)),
                (seconds = Math.floor((timer / 1000) % 60));
        }
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
    setClock(".timer", deadline);

    // Modal

    const modalTrigger = document.querySelectorAll("[data-modal]"),
        modal = document.querySelector(".modal");

    function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.overflow = "";
    }

    modalTrigger.forEach((item) => {
        item.addEventListener("click", openModal);
    });

    modal.addEventListener("click", (e) => {
        if (e.target == modal || e.target.getAttribute("data-close") == "") {
            closeModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 3000);

    function showModalByScroll() {
        if (
            window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight
        ) {
            openModal();
            window.removeEventListener("scroll", showModalByScroll);
        }
    }
    window.addEventListener("scroll", showModalByScroll);

    //Class
    class MenuCard {
        constructor(src, alt, title, deser, price, parentSelector, ...classes) {
            (this.src = src),
                (this.alt = alt),
                (this.title = title),
                (this.deser = deser),
                (this.price = price),
                (this.classes = classes),
                (this.parent = document.querySelector(parentSelector)),
                (this.transfer = 11520),
                this.chageToUZS();
        }
        chageToUZS() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement("div");

            if (this.classes.length === 0) {
                this.element = "menu__item";
                element.classList.add(this.element);
            } else {
                this.classes.forEach((classname) =>
                    element.classList.add(classname)
                );
            }

            element.innerHTML = `
            
                <img src=${this.src} alt=${this.alt} />
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.deser}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Price:</div>
                    <div class="menu__item-total"><span>${this.price}</span> uzs/month</div>
                </div>`;

            this.parent.append(element);
        }
    }

    axios.get("http://localhost:3000/menu").then((data) => {
        data.data.forEach(({ img, altimg, title, descr, price }) => {
            new MenuCard(
                img,
                altimg,
                title,
                descr,
                price,
                ".menu .container"
            ).render();
        });
    });

    // async function getRecource(url) {
    //     const res = await fetch(url);

    //     return await res.json();
    // }

    // getRecource("http://localhost:3000/menu").then((data) => {
    //     data.forEach(({ img, altimg, title, descr, price }) => {
    //         new MenuCard(
    //             img,
    //             altimg,
    //             title,
    //             descr,
    //             price,
    //             ".menu .container"
    //         ).render();
    //     });
    // });

    // FORM

    const forms = document.querySelectorAll("form");

    forms.forEach((form) => {
        bindPostData(form);
    });

    const msg = {
        loading: "./img/Spinner-1s-200px.svg",
        success: "Thank's for submitting our form",
        failure: "Something went wrong",
    };

    async function postData(url, data) {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    function bindPostData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const statusMessage = document.createElement("img");
            statusMessage.src = msg.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;`;
            form.insertAdjacentElement("afterend", statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData("http://localhost:3000/request", json)
                .then((data) => {
                    console.log(data);
                    showThanksModal(msg.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(msg.failure);
                })
                .finally(() => {
                    form.reset();
                });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__dialog");

        prevModalDialog.classList.add("hide");
        openModal();

        const thanksModal = document.createElement("div");
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div data-close class="modal__close">&times;</div>
            <div class="modal__title">${message}</div>
        </div>
        `;
        document.querySelector(".modal").append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add("show");
            prevModalDialog.classList.remove("hide");
            closeModal();
        }, 4000);
    }

    //slider

    const slides = document.querySelectorAll(".offer__slide"),
        next = document.querySelector(".offer__slider-next"),
        prev = document.querySelector(".offer__slider-prev"),
        total = document.querySelector("#total"),
        current = document.querySelector("#current"),
        slidesWrapper = document.querySelector(".offer__slider-wrapper"),
        slidesField = document.querySelector(".offer__slider-inner"),
        width = window.getComputedStyle(slidesWrapper).width,
        slider = document.querySelector(".offer__slider");

    let slideIndex = 1;
    let offset = 0;

    //---***---
    //     CAROUSEL SLIDER
    //---***---

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + "%";
    slidesField.style.display = "flex";
    slidesField.style.transition = ".5s ease all";
    slidesWrapper.style.overflow = "hidden";

    slides.forEach((slide) => {
        slide.style.width = width;
    });

    const indicators = document.createElement("ol");
    const dots = [];
    indicators.classList.add("carousel-indicators");
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("li");
        dot.setAttribute("data-slide-to", i + 1);
        dot.classList.add("carousel-dot");
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    next.addEventListener("click", () => {
        if (offset == +width.replace(/\D/g, "") * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, "");
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach((dot) => (dot.style.opacity = ".5"));
        dots[slideIndex - 1].style.opacity = 1;
    });

    prev.addEventListener("click", () => {
        if (offset == 0) {
            offset = +width.replace(/\D/g, "") * (slides.length - 1);
        } else {
            offset -= +width.replace(/\D/g, "");
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach((dot) => (dot.style.opacity = ".5"));
        dots[slideIndex - 1].style.opacity = 1;
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            const slideTo = e.target.getAttribute("data-slide-to");

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, "") * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

            dots.forEach((dot) => (dot.style.opacity = ".5"));
            dots[slideIndex - 1].style.opacity = 1;
        });
    });

    // showSlides(slideIndex);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(index) {
    //     if (index > slides.length) {
    //         slideIndex = 1;
    //     }
    //     if (index < 1) {
    //         slideIndex = slides.length;
    //     }
    //     slides.forEach((item) => (item.style.display = "none"));
    //     slides[slideIndex - 1].style.display = "block";

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusSlides(index) {
    //     showSlides((slideIndex += index));
    // }

    // next.addEventListener("click", () => {
    //     plusSlides(1);
    // });

    // prev.addEventListener("click", () => {
    //     plusSlides(-1);
    // });
});

// #54. JSON Chuqur clonlash
/* 
const car = {
    name: "bmw",
    color: "red",
    extra: {
        isAirbag: false,
        ballon: 5,
    },
};

const clone = JSON.parse(JSON.stringify(car));

clone.extra.ballon = 10;

console.log(clone);
console.log(car);

// const objToJSON = JSON.stringify(car);
// const jsonToObj = JSON.parse(objToJSON);
// console.log(objToJSON);
// console.log(jsonToObj);

// json.stringify = objectdan json formatga o'girib beradi.
// json.parse = json formatdan objectga o'girib beradi.
 */

// #55. AJAX

/* const uzs = document.querySelector("#uzs"),
    usd = document.querySelector("#usd");

uzs.addEventListener("input", (e) => {
    const request = new XMLHttpRequest();

    request.open("GET", "current.json");
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    request.send();

    request.addEventListener("load", () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            usd.value = (+uzs.value / data.current.usd).toFixed(2);
        } else {
            usd.value = "Something went wrong";
        }
    });
}); */

//#58. Promise
/* 
// #1
// const isFrendCome = false;

// const meetingRequest = new Promise((resolve, reject) => {
//     if (isFrendCome) {
//         const msg = "Frend I'm there";
//         resolve(msg);
//     } else {
//         const err = "I can't come there";
//         reject(err);
//     }
// });

// meetingRequest
//     .then((msg) => console.log(msg))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("I'm colling you"));

// #2

console.log("Request data...");

const req = new Promise((resolve) => {
    setTimeout(() => {
        const product = {
            name: "car",
            color: "black",
        };
        console.log("Processing data...")
        resolve(product);
    }, 2000);
});

req.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.status = "ordered";
            console.log("Get data...");
            reject();
        }, 2000);
    });
})
    .then((result) => console.log(result))
    .catch(() => console.log("Something went wrong"))
    .finally(() => console.log("Fatching end"));
 */

// #59. Promise Method
/* 
const request = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time);
    });
};
// #1
request(1000).then(() => console.log("Request 1000 ms"));
request(2000).then(() => console.log("Request 2000 ms"));
request(3000).then(() => console.log("Request 3000 ms"));

// #2
// Promise.all([request(1000), request(2000), request(3000)]).then(() => {
//     console.log("All");
// });

// #3
// Promise.race([request(1000), request(2000), request(3000)]).then(() => {
//     console.log("All");
// });
 */

//#60. Fetch API

/* fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "elyor" }),
})
    .then((response) => response.json())
    .then((json) => console.log(json)); */

//#61. Map Filter Reduce

//#1
//Map method - yangi massiv qaytaradi eski massivni qiymatini o'zgartirib

// const car = ["MErc", "BmW", "TesLa"];
// const arr = car.map((item) => item.toLowerCase());
// console.log(arr);

//#2
//Filter method - yangi massiv qaytaradi filter qilib

// let car = ["mercedez benz", "bmw", "audi", "rollce royce"];
// car = car.filter((item) => item.length < 5);
// console.log(car);

//#3
// SOME/EVERY method - boolean qiymat qaytaradi

// const arr = [1, "elyor", true];
// console.log(arr.some((item) => typeof item === "number"));
// console.log(arr.every((item) => typeof item === "number"));

//#4
// REDUCE method - bitta qandaydur qiymat qaytaradi

// const arr = [4, 32, 1, 3];
// const res = arr.reduce((sum, current) => sum + current, 10);
// console.log(res);

// const arr = ["bmw", "merc", "tayota", "tesla"];
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

// #70. Localstorage

/* const email = document.querySelector(".email"),
    firstName = document.querySelector(".name"),
    formSubmit = document.querySelector("form"),
    doc = document.querySelector(".doc");

formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = {
        email: email.value,
        name: firstName.value,
    };
    e.target.reset();

    localStorage.setItem("user", JSON.stringify(user));
});
const user = JSON.parse(localStorage.getItem("user"));

doc.textContent = `${user.name}`; */

// #71. Oddiy iboralar
/* 
//const firstName = prompt("What is your name", "");
//const regex = /a/g;
//i
//g
//console.log(firstName.search(regex));
//console.log(firstName.match(regex));


// const password = prompt("Your password");
// console.log(password.replace(/\$/g, "*"));


// const num = "12-34-56-78-90";
// console.log(num.replace(/-/g, ":"));


// const name = prompt("Name", "");
// const regexp = /\s/gi;
// console.log(name.match(regexp));
// \d - number
// \w - word
// \s - space
// \D - not a number
// \W - not a word
// \S - not a space
 */

// #72. Regex
