// Write your solution in this file!

// Step 1: Variable Data (Global Scope)
let burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Step 2: Function and Block
function addBurger() {
    // Function-scoped variable
    let newBurger = 'Flatburger';
    
    // Add to the burgers array
    burgers.push(newBurger);

    // Block-scoped variables inside an if block
    if (true) {
        let anotherNewBurger = 'Maple Bacon Burger';
        burgers.push(anotherNewBurger);

        // Function to change the featured drink
        function changeFeaturedDrink() {
            featuredDrink = 'The JavaShake';
        }

        // Optional: call the function here if you want to immediately update
        // changeFeaturedDrink();
    }
}

// Example usage
addBurger();
console.log(burgers); // ['Hamburger', 'Cheeseburger', 'Flatburger', 'Maple Bacon Burger']
console.log(featuredDrink); // 'Strawberry Milkshake'

// If you want to change the drink, call the inner function outside (requires refactor to return it)
