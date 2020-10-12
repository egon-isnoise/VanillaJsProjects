
// arrays to set the month names and the weekday names properly

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

// selecting what we need from the DOM  
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");


// setting a specific date
// REMEMBER THAT months in new Date are on a 0 index base

// setting always a date that is 10 days from when we open the site in order to show that the application works

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 7, 11, 30, 0);
// let futureDate = new Date(2020, 9, 24, 15, 30 ,0);


// writing variables to return the date infos in the DOM
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const month = months[futureDate.getMonth()];
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();


// returning the date infos in the dom inside the h4 with class = giveaway
giveaway.textContent = `giveaway ends on  ${weekday} ${date} ${month} ${year} at ${hours}:${minutes}pm`;


// future time in ms
const futureTime = futureDate.getTime();
// console.log(futureTime);


// as the name implies create a function to get the milliseconds of today's date
function getRemaingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    //console.log(t);

    //values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculate all values
    let days = t/oneDay;
    days = Math.floor(days);


    let hours = (t % oneDay)/ oneHour;
    hours = Math.floor(hours);

    let minutes = (t % oneHour)  / oneMinute;
    minutes = Math.floor(minutes);

    let seconds = (t % oneMinute) / 1000;
    seconds = Math.floor(seconds);

    //set values array
    const values = [days,hours,minutes,seconds];

    function format(item){
        if(item<10){
            return item = `0${item}`;
        }else{
            return item;
        }
    }

    // put the values inside the DOM
    items.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    });

    // if our time has expired change the deadline div in the DOM
    if(t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry, This giveaway has expired.<h4>`;
    }
};

let countdown = setInterval(getRemaingTime,1000);

getRemaingTime();