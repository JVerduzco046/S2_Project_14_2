"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Juan Verduzco
   Date:   04.04.19

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/


window.onload = setupCart;

function setupCart() {

      var addButton = document.getElementsByClassName("addButton");

      for (let i = 0; i < addButton.length; i++) {

            addButton[i].onclick = addItem;
      }
}

function addItem(e) {

      var foodItem = e.target.nextElementSibling;

      var foodID = foodItem.getAttribute("id");

      var foodDescription = foodItem.cloneNode(true);

      var cartBox = document.getElementById("cart");

      var duplicateOrder = false;

      for (let n = cartBox.firstChild; n = n.nextSibling; n !== null) {

            if (n.id === foodID) {

                  duplicateOrder = true;

                  n.firstChild.textContent++;

                  break;
            }
      }

      if (duplicateOrder === false) {

            var orderCount = document.createElement("span");

            orderCount.textContent = '1';

            foodDescription.insertBefore(orderCount, foodDescription.firstChild);

            cartBox.appendChild(foodDescription);
      }
}