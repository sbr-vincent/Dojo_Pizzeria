function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

//Pizza 1
var nyPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(nyPizza);

//Pizza 2
var earthyPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(earthyPizza);

//Pizza 3
var margharitaPizza = pizzaOven("hand tossed", "marinara", ["mozzarella"], ["basil"]);
console.log(margharitaPizza);

//Pizza 4
var cacioPizza = pizzaOven("hand tossed", "none", ["pecorino romano"], ["black pepper"]);
console.log(cacioPizza);

//Random Pizza
var ranPizza = {
    "crustType": ["deep dish", "handtossed", "thin", "cheese stuffed"],
    "sauceType":  ["alfredo sauce", "marinara", "none", "bbq sauce"],
    "cheeses":   ["mozzerella", "none", "pecorino romano", "parmesan", "ricotta"],
    "toppings": ["pepperoni", "meatballs", "sausage", "pineapple", "bell peppers", "onions", "black olives", "pineapple"],
    "randomPizza": function() {
        console.log("Crust:    " + this.crustType[Math.floor(Math.random()*this.crustType.length)]);
        console.log("Protein:  " + this.sauceType[Math.floor(Math.random()*this.sauceType.length)]);
        console.log("Cheese:   " + this.cheeses[Math.floor(Math.random()*this.cheeses.length)]);
        console.log("Toppings: " + this.toppings[Math.floor(Math.random()*this.toppings.length)]);
    }
}

ranPizza.randomPizza();