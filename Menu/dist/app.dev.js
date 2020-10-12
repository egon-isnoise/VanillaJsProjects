"use strict";

// items
var menu = [{
  id: 1,
  title: "buttermilk pancakes",
  category: "breakfast",
  price: 15.99,
  img: "./images/item-1.jpg",
  desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed "
}, {
  id: 2,
  title: "diner double",
  category: "lunch",
  price: 13.99,
  img: "./images/item-2.jpg",
  desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats "
}, {
  id: 3,
  title: "godzilla milkshake",
  category: "shakes",
  price: 6.99,
  img: "./images/item-3.jpg",
  desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
}, {
  id: 4,
  title: "country delight",
  category: "breakfast",
  price: 20.99,
  img: "./images/item-4.jpg",
  desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, "
}, {
  id: 5,
  title: "egg attack",
  category: "lunch",
  price: 22.99,
  img: "./images/item-5.jpg",
  desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up "
}, {
  id: 6,
  title: "oreo dream",
  category: "shakes",
  price: 18.99,
  img: "./images/item-6.jpg",
  desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
}, {
  id: 7,
  title: "bacon overflow",
  category: "breakfast",
  price: 8.99,
  img: "./images/item-7.jpg",
  desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird "
}, {
  id: 8,
  title: "american classic",
  category: "lunch",
  price: 12.99,
  img: "./images/item-8.jpg",
  desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  "
}]; // define a variable for the section that display the items

var sectionCenter = document.querySelector(".section-center"); // define another variable for the buttons that will filter the items

var filterBtns = document.querySelectorAll(".filter-btn"); // add a listener for the event when the page loads

window.addEventListener("DOMContentLoaded", function () {
  // call the function displayMenuItems (defined below) with a variable of menu (the list above)
  displayMenuItems(menu);
}); //filtering the items

filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    var category = e.currentTarget.dataset.id;
    var menuCategory = menu.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    }); // console.log(menuCategory);

    if (category === "all") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  });
}); // create the displayMenuItems function

function displayMenuItems(menuItems) {
  // this loops into the various items in the menu and --
  var displayMenu = menuItems.map(function (item) {
    console.log(item); // -- returns this html (with the values changed according to the menu items specifications)

    return "<article class=\"menu-item\">\n        <img src=".concat(item.img, " class=\"photo\" alt=").concat(item.title, ">\n        <div class=\"item-info\">\n            <header>\n                <h4>").concat(item.title, "</h4>\n                <h4 class=\"price\">$ ").concat(item.price, "</h4>\n            </header>\n            <p class=\"item-text\">").concat(item.desc, "</p>\n        </div>\n    </article>");
  }); // creates a single string in order to display the html created up here

  displayMenu = displayMenu.join(''); // recalls the variable to displayMenu to show it in the sectionCenter part of our html

  sectionCenter.innerHTML = displayMenu;
}

;