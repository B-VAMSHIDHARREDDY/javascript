//This demo will show how to use cart class created in the cart.js export
const cart = require("./cart")
let shoppingCart = require("./cart")
// console.log(shoppingCart)
cart.addToCart({'id':1,'name':"Samsung Note 10",'price':45000})
cart.addToCart({'id':2,'name':"Poco M2 pro",'price':13000})
cart.addToCart({'id':3,'name':"MI Note 10",'price':30000})
cart.addToCart({'id':4,'name':"Realme C2",'price':10000})
cart.addToCart({'id':5,'name':"Appple 13 pro Max",'price':145000})
cart.DItem(3)
const items = cart.getAll(); // return in array

// items.forEach((e) => console.log(e.name));

items.forEach(function(eachItem){
    console.log(`${eachItem.name} cost is ${eachItem.price}`)
})