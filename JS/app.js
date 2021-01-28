'use strict';

// let myContainer = document.getElementById('container');
// let seattleList = document.getElementById('seattle');
// console.log(myContainer);


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2am', '3am', '4am', '5am', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  minCusPerHour: 23,
  maxCusPerHour: 65,
  avgCookiesSoldPerCustomer: 6.3,
  cookiesSoldPerHourArray: [],
  dailySoldTotal: 0,
  randomCusEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      return Math.floor(Math.random() * (this.maxCusPerHour - this.minCusPerHour + 1) + this.minCusPerHour);
    }
  },

  calcCookiesSoldEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.randomCusEachHour() * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldPerHourArray.push(hourlyCookies);
      this.dailySoldTotal += hourlyCookies;
    }
  },
  
  render: function () {
    this.calcCookiesSoldEachHour();
    let seattleList = document.getElementById('seattle');
    for (let i=0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]}`;
      seattleList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailySoldTotal}`;
    seattleList.appendChild(li);
    // console.log('render method proof of life');
  },
};

let tokyo = {
  name: 'Tokyo',
  minCusPerHour: 3,
  maxCusPerHour: 24,
  avgCookiesSoldPerCustomer: 1.2,
  cookiesSoldPerHourArray: [],
  dailySoldTotal: 0,
  randomCusEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      return Math.floor(Math.random() * (this.maxCusPerHour - this.minCusPerHour + 1) + this.minCusPerHour);
    }
  },

  calcCookiesSoldEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.randomCusEachHour() * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldPerHourArray.push(hourlyCookies);
      this.dailySoldTotal += hourlyCookies;
    }
  },
  
  render: function () {
    this.calcCookiesSoldEachHour();
    let tokyoList = document.getElementById('tokyo');
    for (let i=0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]}`;
      tokyoList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailySoldTotal}`;
    tokyoList.appendChild(li);
    // console.log('render method proof of life');
  },
};

let dubai = {
  name: 'Dubai',
  minCusPerHour: 11,
  maxCusPerHour: 38,
  avgCookiesSoldPerCustomer: 3.7,
  cookiesSoldPerHourArray: [],
  dailySoldTotal: 0,
  randomCusEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      return Math.floor(Math.random() * (this.maxCusPerHour - this.minCusPerHour + 1) + this.minCusPerHour);
    }
  },

  calcCookiesSoldEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.randomCusEachHour() * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldPerHourArray.push(hourlyCookies);
      this.dailySoldTotal += hourlyCookies;
    }
  },
  
  render: function () {
    this.calcCookiesSoldEachHour();
    let dubaiList = document.getElementById('dubai');
    for (let i=0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]}`;
      dubaiList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailySoldTotal}`;
    dubaiList.appendChild(li);
    // console.log('render method proof of life');
  },
};

let paris = {
  name: 'Paris',
  minCusPerHour: 20,
  maxCusPerHour: 38,
  avgCookiesSoldPerCustomer: 2.3,
  cookiesSoldPerHourArray: [],
  dailySoldTotal: 0,
  randomCusEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      return Math.floor(Math.random() * (this.maxCusPerHour - this.minCusPerHour + 1) + this.minCusPerHour);
    }
  },

  calcCookiesSoldEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.randomCusEachHour() * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldPerHourArray.push(hourlyCookies);
      this.dailySoldTotal += hourlyCookies;
    }
  },
  
  render: function () {
    this.calcCookiesSoldEachHour();
    let parisList = document.getElementById('paris');
    for (let i=0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]}`;
      parisList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailySoldTotal}`;
    parisList.appendChild(li);
    // console.log('render method proof of life');
  },
};

let lima = {
  name: 'Lima',
  minCusPerHour: 2,
  maxCusPerHour: 16,
  avgCookiesSoldPerCustomer: 4.6,
  cookiesSoldPerHourArray: [],
  dailySoldTotal: 0,
  randomCusEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      return Math.floor(Math.random() * (this.maxCusPerHour - this.minCusPerHour + 1) + this.minCusPerHour);
    }
  },

  calcCookiesSoldEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.randomCusEachHour() * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldPerHourArray.push(hourlyCookies);
      this.dailySoldTotal += hourlyCookies;
    }
  },
  
  render: function () {
    this.calcCookiesSoldEachHour();
    let limaList = document.getElementById('lima');
    for (let i=0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]}`;
      limaList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailySoldTotal}`;
    limaList.appendChild(li);
    // console.log('render method proof of life');
  },
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

console.log(seattle);