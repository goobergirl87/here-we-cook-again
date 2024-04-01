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

const section = document.querySelector("section");
const form = document.querySelector(".form");
const inputTitle = document.querySelector("#title");
const inputTime = document.querySelector("#time");
const inputKind = document.querySelector("#kind");
const inputWoke = document.querySelector("#woke");
const inputIngredients = document.querySelector("#ingredients");
const inputPrep = document.querySelector("#prep");

class Library {
  recipeLibrary = [];

  constructor() {
    form.addEventListener("submit", this.newRecipe.bind(this));
  }

  newRecipe(e) {
    e.preventDefault();

    const title = inputTitle.value;
    const time = inputTime.value;
    const kind = inputKind.value;
    const woke = inputWoke.value;
    const ingredients = inputIngredients.value;
    const prep = inputPrep.value;

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
