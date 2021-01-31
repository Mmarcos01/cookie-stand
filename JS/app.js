'use strict';

// let myContainer = document.getElementById('container');
// let seattleList = document.getElementById('seattle');
// console.log(myContainer);

// let cookieTable = document.getElementById('cookie-table');

const locationNames = [];

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2am', '3am', '4am', '5am', '6pm', '7pm'];
const grandTotals = new Array(hours.length + 1).fill(0);
console.log(grandTotals);

//Constructor Function:

function CookieStand(location, minCustPerHr, maxCustPerHr, avgCookiesSold) {
  this.location = location;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgCookiesSold = avgCookiesSold;
  this.dailySoldTotal = 0;
  this.cookiesSoldPerHr = [];
  this.calcCookiesSoldEachHour();
  this.grandTotalsCalc();
  locationNames.push(this);
}

CookieStand.prototype.grandTotalsCalc = function () {
  for (let i = 0; i < this.cookiesSoldPerHr.length; i++) {
    grandTotals[i] += this.cookiesSoldPerHr[i];
    grandTotals[grandTotals.length - 1] += this.cookiesSoldPerHr[i];
  }

};

CookieStand.prototype.randomCusEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr);
  }
};

CookieStand.prototype.calcCookiesSoldEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let hourlyCookies = Math.ceil(this.randomCusEachHour() * this.avgCookiesSold);
    console.log(hourlyCookies);
    this.cookiesSoldPerHr.push(hourlyCookies);
    this.dailySoldTotal += hourlyCookies;
  }
  console.log(this.dailySoldTotal);
};

// instances of CookieStand constructor
new CookieStand('Seattle', 23, 65, 6.3);
new CookieStand('Tokyo', 3, 24, 1.2);
new CookieStand('Dubai', 11, 38, 3.7);
new CookieStand('Paris', 20, 38, 2.3);
new CookieStand('Lima', 2, 16, 4.6);
// seattle.calcCookiesSoldEachHour();
// tokyo.calcCookiesSoldEachHour();
// dubai.calcCookiesSoldEachHour();
// paris.calcCookiesSoldEachHour();
// lima.calcCookiesSoldEachHour();

let renderHeaderRow = function () {
  let trElem = document.getElementById('row');
  console.log(trElem);
  let thElem = document.createElement('th');
  thElem.textContent = 'Location';
  trElem.appendChild(thElem);
  for (let i = 0; i < hours.length; i++) {
    let tdElem = document.createElement('td');
    tdElem.textContent = hours[i];
    trElem.appendChild(tdElem);
  }
  let tdElem = document.createElement('td');
  tdElem.textContent = 'Total';
  trElem.appendChild(tdElem);
};

renderHeaderRow();

let renderStoreRow = function () {
  let body = document.getElementById('body');
  for (let i = 0; i < locationNames.length; i++) {
    let trElem = document.createElement('tr');
    let thElem = document.createElement('th');
    thElem.textContent = locationNames[i].location;
    trElem.appendChild(thElem);
    for (let j = 0; j < locationNames[i].cookiesSoldPerHr.length; j++) {
      let tdElem = document.createElement('td');
      tdElem.textContent = locationNames[i].cookiesSoldPerHr[j];
      trElem.appendChild(tdElem);
    }
    let tdElem = document.createElement('td');
    tdElem.textContent = locationNames[i].dailySoldTotal;
    trElem.appendChild(tdElem);
    body.appendChild(trElem);
  }
};

renderStoreRow();

let renderFooterRow = function () {
  let footer = document.getElementById('footrow');
  let thElem = document.createElement('th');
  thElem.textContent = 'Grand Total';
  footer.appendChild(thElem);
  console.log(grandTotals);
  for (let i = 0; i < grandTotals.length; i++) {
    let tdElem = document.createElement('td');
    tdElem.textContent = grandTotals[i];
    footer.appendChild(tdElem);
  }
};

renderFooterRow();