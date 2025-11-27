// Step 1: Variable Data (Global Scope)
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Step 2: Function and Block
function addBurger() {
    // Function-scoped variable
    const newBurger = 'Flatburger';
    
    // Add to the burgers array
    burgers.push(newBurger);

    // Block-scoped variables inside an if block
    if (true) {
        const anotherNewBurger = 'Maple Bacon Burger';
        burgers.push(anotherNewBurger);
    }
}

// Step 3: Function to change featured drink
function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
}

// Example usage (optional, just for console testing)
console.log('Before addBurger:', burgers); // ['Hamburger', 'Cheeseburger']
addBurger();
console.log('After addBurger:', burgers); // ['Hamburger', 'Cheeseburger', 'Flatburger', 'Maple Bacon Burger']
console.log('Featured drink before change:', featuredDrink); // 'Strawberry Milkshake'
changeFeaturedDrink();
console.log('Featured drink after change:', featuredDrink); // 'The JavaShake'

