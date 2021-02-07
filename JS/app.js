'use strict';
// Change background random color function:

let colorChange = function () {
  let colors = ['black', 'white', 'green', 'purple', 'brown', 'salmon'];

  let button = document.getElementById('button');

  button.addEventListener('click', function () {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let change = document.getElementById('change');

    change.style.background = randomColor;
  });
};

colorChange();

let myForm = document.querySelector('form');
// console.log(myForm); // proof of life shows form in console log

const locationNames = [];

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2am', '3am', '4am', '5am', '6pm', '7pm'];
const grandTotals = new Array(hours.length + 1).fill(0); //creates array without items, but with the given length of the hours array, .fill sets values of each index to 0
// console.log(grandTotals);

//Constructor Function:

function CookieStand(location, minCustPerHr, maxCustPerHr, avgCookiesSold) { //parameters that will have different values will be in()
  this.location = location;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgCookiesSold = avgCookiesSold;
  this.dailySoldTotal = 0;
  this.cookiesSoldPerHr = [];
  this.calcCookiesSoldEachHour();
  this.grandTotalsCalc();
  locationNames.push(this); //push everything into the empty locationNames array above
}

// Creating (Object Constructor?) function, callling .grandTotalsCalc function to execute this code
// Calculate Grand Totals:

CookieStand.prototype.grandTotalsCalc = function () {
  for (let i = 0; i < this.cookiesSoldPerHr.length; i++) {
    grandTotals[i] += this.cookiesSoldPerHr[i];
    grandTotals[grandTotals.length - 1] += this.cookiesSoldPerHr[i];
  }
  let body = document.getElementById('body');
  let trElem = document.createElement('tr');
  let thElem = document.createElement('th');
  thElem.textContent = this.location;
  trElem.appendChild(thElem);
  for (let j = 0; j < this.cookiesSoldPerHr.length; j++) {
    let tdElem = document.createElement('td');
    tdElem.textContent = this.cookiesSoldPerHr[j];
    trElem.appendChild(tdElem);
  }
  let tdElem = document.createElement('td');
  tdElem.textContent = this.dailySoldTotal;
  trElem.appendChild(tdElem);
  body.appendChild(trElem);
};

// Calculate random numbers based on min max parameters
CookieStand.prototype.randomCusEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr);
  }
};
//Calculate total of those random numbers
CookieStand.prototype.calcCookiesSoldEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let hourlyCookies = Math.ceil(this.randomCusEachHour() * this.avgCookiesSold);
    // console.log(hourlyCookies);
    this.cookiesSoldPerHr.push(hourlyCookies);
    this.dailySoldTotal += hourlyCookies;
  }
  // console.log(this.dailySoldTotal);
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

// Begin rendering data to table:

let renderHeaderRow = function () {
  let trElem = document.getElementById('row');
  // console.log(trElem);
  let thElem = document.createElement('th');
  thElem.textContent = '';
  trElem.appendChild(thElem);
  for (let i = 0; i < hours.length; i++) { // for loop for creating table data cells the length of hours
    let tdElem = document.createElement('td');
    tdElem.textContent = hours[i]; //render hours in td cells based on hours array
    trElem.appendChild(tdElem); //append data to the row
  }
  let tdElem = document.createElement('td');
  tdElem.textContent = 'Total';
  trElem.appendChild(tdElem);
};

renderHeaderRow();

let renderFooterRow = function () {
  let footer = document.getElementById('footrow');
  let thElem = document.createElement('th');
  thElem.textContent = 'Grand Total';
  footer.appendChild(thElem);
  // console.log(grandTotals);
  for (let i = 0; i < grandTotals.length; i++) {
    let tdElem = document.createElement('td');
    tdElem.textContent = grandTotals[i];
    footer.appendChild(tdElem);
  }
};

renderFooterRow();

function handleSubmit(event) {
  event.preventDefault();

  let addLocation = event.target.addLocation.value;
  let minCust = +event.target.minCust.value;
  let maxCust = +event.target.maxCust.value;
  let avgCookies = +event.target.avgCookies.value;

  new CookieStand(addLocation, minCust, maxCust, avgCookies);

  let grab = document.getElementById('footrow');
  grab.innerHTML = '';
  renderFooterRow();
}

myForm.addEventListener('submit', handleSubmit);



