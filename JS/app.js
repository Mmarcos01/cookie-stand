'use strict';

// let myContainer = document.getElementById('container');
// let seattleList = document.getElementById('seattle');
// console.log(myContainer);

// let cookieTable = document.getElementById('cookie-table')
// const allCities = [];
let cookieTable = document.getElementById('cookie-stand');
cookieTable.textContent = 'this is my table.';
let myDiv = document.createElement('div');
myDiv.textContent = 'This is my div.';
cookieTable.appendChild(myDiv);


const locationNames = [];

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2am', '3am', '4am', '5am', '6pm', '7pm'];

//Constructor Function:

function CookieStand (location, minCustPerHr, maxCustPerHr, avgCookiesSold) {
  this.location = location;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgCookiesSold = avgCookiesSold;
  this.dailySoldTotal = 0;
  this.cookiesSoldPerHr = [];
  locationNames.push(this);
}

let seattle = new CookieStand('Seattle', 23, 65, 6.3);

let renderHeaderRow = function(){
  let trElem = document.getElementById('row');
  console.log(trElem);
  let thElem = document.createElement('th');
  thElem.textContent = 'Location';
  trElem.appendChild(thElem);
  for (let i = 0; i < hours.length; i++){
    let tdElem = document.createElement('td');
    tdElem.textContent = hours[i];
    trElem.appendChild(tdElem);
  }
  cookieTable.appendChild(trElem);
};

renderHeaderRow();

let renderStoreRow = function () {
  let body = document.getElementById('body');
  let trElem = document.createElement('tr');
  for (let i = 0; i < locationNames.length; i++) {
    let thElem = document.createElement('th');
    thElem.textContent = locationNames[i].location;
    trElem.appendChild(thElem);
    for (let j = 0; j < locationNames[i].cookiesSoldPerHr.length; j++) {
      let tdElem = document.createElement('td');
      tdElem.textContent = locationNames[i].cookiesSoldPerHr[j];
      trElem.appendChild(tdElem);
    }
    body.appendChild(trElem);
  }
};

renderStoreRow();

// let tokyo = new CookieStand ('Tokyo', 3, 24, 1.2, 'test', 'test');

// function domRender () {


// let tr = document.createElement('tr')
// CookieStand.appendChild(tr);

  // let tokyoList = document.getElementById('tokyo');
  // for (let i = 0; i < locationNames.length; i++) {
  //   let td = document.createElement('td');
  //   td.textContent = `${hours[i]}: ${locationNames[i]}.location`;
  //   tokyoList.appendChild(td);
  // }
  // console.log(seattle.location);
  // let li = document.createElement('li');
  // li.textContent = `Total Cookies Sold: ${this.dailySoldTotal}`;
  // tokyoList.appendChild(li);
// }

// domRender();




// console.log(CookieStand[0]);

// for (let i = 0; i < CookieStand.length; i++) {
//   console.log(CookieStand[i]);
// }

// let seattle = {
//   location: 'Seattle',
//   minCusPerHour: 23,
//   maxCustPerHr: 65,
//   avgCookiesSold: 6.3,
//   cookiesSoldPerHr: [],
//   dailySoldTotal: 0,
// };


// function calcTotals () {
//   let total = 0;
//   for (let i = 0 < total.length; i++;) {
//     total += totals[i];
// }

// return calcTotals;
// console.log (total);

// function Cities (city, dailyTotal) {
//   this.city = city;
//   this.dailytotal = dailyTotal;
//   this.totalCookies = 0;
//   allCities.push(this);
// }

// Cities.prototype.calcTotal = function () {
//   for (let i = 0; i < this.hours.length; i++) {
//     this.totalCookies += this.hours[i];
//   }
// };

//   Cities.prototype.render = function () {
//     // create tr and append
//     let tr = document.createElement('tr');
//     cookieTable.appendChild(tr);

//     // create th, give content, append
//     let th = document.createElement('th');
//     th.textContent = this.city;
//     tr.appendChild(th);

//     //create multiple tds, give content, append
//     for (let i = 0; i < this.hours.length; i++) {
//       this.totalCookies += this.hours[i];
//       let td = document.createElement('td');
//       td.textContent = this.hours[i];
//       tr.appendChild(td);

// }

// Cities();

// let cityOne = new City('Seattle',   )

// // cityOne.render();
// function renderAll(){
//   //use for loop
//   for(let i = 0; i < allCities.length; i++){
//     allCities[i]render();
//     allCities[i]renderSection();
//   }
// }


// -------------------------


// ----------------------------------

// let cities = [
//   { name: 'Seatle' },
//   { name: 'Tokyo' },
//   { name: 'Dubai' },
//   { name: 'Paris' },
//   { name: 'Lima' },
// ];

// let headers = [hours[0]];

// let table = document.createElement('table');
// let headerRow = document.createTextNode('tr');
// -----------------------------------------------


// let seattle = {
//   name: 'Seattle',
//   minCusPerHour: 23,
//   maxCusPerHour: 65,
//   avgCookiesSoldPerCustomer: 6.3,
//   cookiesSoldPerHourArray: [],
//   dailySoldTotal: 0,
//   randomCusEachHour: function () {
//     // for (let i = 0; i < hours.length; i++) {
//     return Math.floor(Math.random() * (this.maxCusPerHour - this.minCusPerHour + 1) + this.minCusPerHour);
//     // }
//   },

//   calcCookiesSoldEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let hourlyCookies = Math.ceil(this.randomCusEachHour() * this.avgCookiesSoldPerCustomer);
//       this.cookiesSoldPerHourArray.push(hourlyCookies);
//       this.dailySoldTotal += hourlyCookies;
//     }
//   },
  
//   render: function () {
//     this.calcCookiesSoldEachHour();
//     let seattleList = document.getElementById('seattle');
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]}`;
//       seattleList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailySoldTotal}`;
//     seattleList.appendChild(li);
//     // console.log('render method proof of life');
//   },
// };

// let tokyo = {
//   name: 'Tokyo',
//   minCusPerHour: 3,
//   maxCusPerHour: 24,
//   avgCookiesSoldPerCustomer: 1.2,
//   cookiesSoldPerHourArray: [],
//   dailySoldTotal: 0,
//   randomCusEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       return Math.floor(Math.random() * (this.maxCusPerHour - this.minCusPerHour + 1) + this.minCusPerHour);
//     }
//   },

//   calcCookiesSoldEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let hourlyCookies = Math.ceil(this.randomCusEachHour() * this.avgCookiesSoldPerCustomer);
//       this.cookiesSoldPerHourArray.push(hourlyCookies);
//       this.dailySoldTotal += hourlyCookies;
//     }
//   },
  
//   render: function () {
//     this.calcCookiesSoldEachHour();
//     let tokyoList = document.getElementById('tokyo');
//     for (let i=0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]}`;
//       tokyoList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailySoldTotal}`;
//     tokyoList.appendChild(li);
//     // console.log('render method proof of life');
//   },
// };

// let dubai = {
//   name: 'Dubai',
//   minCusPerHour: 11,
//   maxCusPerHour: 38,
//   avgCookiesSoldPerCustomer: 3.7,
//   cookiesSoldPerHourArray: [],
//   dailySoldTotal: 0,
//   randomCusEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       return Math.floor(Math.random() * (this.maxCusPerHour - this.minCusPerHour + 1) + this.minCusPerHour);
//     }
//   },

//   calcCookiesSoldEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let hourlyCookies = Math.ceil(this.randomCusEachHour() * this.avgCookiesSoldPerCustomer);
//       this.cookiesSoldPerHourArray.push(hourlyCookies);
//       this.dailySoldTotal += hourlyCookies;
//     }
//   },
  
//   render: function () {
//     this.calcCookiesSoldEachHour();
//     let dubaiList = document.getElementById('dubai');
//     for (let i=0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]}`;
//       dubaiList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailySoldTotal}`;
//     dubaiList.appendChild(li);
//     // console.log('render method proof of life');
//   },
// };

// let paris = {
//   name: 'Paris',
//   minCusPerHour: 20,
//   maxCusPerHour: 38,
//   avgCookiesSoldPerCustomer: 2.3,
//   cookiesSoldPerHourArray: [],
//   dailySoldTotal: 0,
//   randomCusEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       return Math.floor(Math.random() * (this.maxCusPerHour - this.minCusPerHour + 1) + this.minCusPerHour);
//     }
//   },

//   calcCookiesSoldEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let hourlyCookies = Math.ceil(this.randomCusEachHour() * this.avgCookiesSoldPerCustomer);
//       this.cookiesSoldPerHourArray.push(hourlyCookies);
//       this.dailySoldTotal += hourlyCookies;
//     }
//   },
  
//   render: function () {
//     this.calcCookiesSoldEachHour();
//     let parisList = document.getElementById('paris');
//     for (let i=0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]}`;
//       parisList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailySoldTotal}`;
//     parisList.appendChild(li);
//     // console.log('render method proof of life');
//   },
// };

// let lima = {
//   name: 'Lima',
//   minCusPerHour: 2,
//   maxCusPerHour: 16,
//   avgCookiesSoldPerCustomer: 4.6,
//   cookiesSoldPerHourArray: [],
//   dailySoldTotal: 0,
//   randomCusEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       return Math.floor(Math.random() * (this.maxCusPerHour - this.minCusPerHour + 1) + this.minCusPerHour);
//     }
//   },

//   calcCookiesSoldEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let hourlyCookies = Math.ceil(this.randomCusEachHour() * this.avgCookiesSoldPerCustomer);
//       this.cookiesSoldPerHourArray.push(hourlyCookies);
//       this.dailySoldTotal += hourlyCookies;
//     }
//   },
  
//   render: function () {
//     this.calcCookiesSoldEachHour();
//     let limaList = document.getElementById('lima');
//     for (let i=0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]}`;
//       limaList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailySoldTotal}`;
//     limaList.appendChild(li);
//     // console.log('render method proof of life');
//   },
// };

// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();

// console.log(seattle);