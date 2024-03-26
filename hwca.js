"use strict";

class Recipe {
  date = new Date();
  id = (Date.now() + "").slice(-10);

  constructor(title, time, kind, wokeness, ingredients, preparation) {
    this.title = title;
    this.time = time;
    this.kind = kind;
    this.wokeness = wokeness;
    this.ingredients = ingredients;
    this.preparation = preparation;
  }
}

class Library {
  recipeLibrary = [];

  newRecipe(e) {
    let recipe;
    recipe = new Recipe(title, time, kind, wokeness, ingredients, preparation);
  }
}

const library = new Library();
const brot = new Recipe(
  "brot",
  "zweiStunde",
  "Backwaren",
  "vegan",
  ["380g Mehl", "300ml lauwarmes Wasser", "3g Trockenhefe"],
  "fdsjfhaejkrbfj,dhsjakrhlfjvadns"
);
console.log(brot);
