// Step 1: Variable Data (Global Scope)
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Step 2: Function and Block
function addBurger() {
  const newBurger = 'Flatburger';
  burgers.push(newBurger);

  if (true) {
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
  }
}

// Step 3: Function to change featured drink
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}


