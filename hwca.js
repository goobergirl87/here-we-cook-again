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
const overview = document.querySelector(".recipe-overview");
const inputTitle = document.querySelector("#title");
const inputTime = document.querySelector("#time");
const inputKind = document.querySelector("#kind");
const inputWoke = document.querySelector("#woke");
const inputIngredients = document.querySelector("#ingredients");
const inputPrep = document.querySelector("#prep");
const toggleFormButton = document.querySelector(".toggle-form");

class Library {
  recipeLibrary = [];

  constructor() {
    form.addEventListener("submit", this.newRecipe.bind(this));

    // Get data from local storage
    this.getLocalStorage();
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
    recipe = new Recipe(title, time, kind, woke, ingredients, prep);

    this.renderRecipe(recipe);

    this.recipeLibrary.push(recipe);

    this.setLocalStorage();
  }

  renderRecipe(recipe) {
    let coll = document.getElementsByClassName("recipe-div");
    let i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

    let ingredientsFormatted = function () {
      let ingr = recipe.ingredients;
      return ingr.replaceAll(",", "<br>");
    };

    let prepFormatted = function () {
      let prepForm = recipe.prep;
      let finalPrep = [];
      prepForm.split(",").forEach((element, index) => {
        finalPrep.push(`${index + 1}. ${element}`);
      });

      return finalPrep.join("<br>");
    };

    let html = `
    <div class="recipe-div">
      <h3 class="title">${recipe.title}</h3>
      <h3 class="time">${recipe.time}</h3>
      <h3 class="kind">${recipe.kind}</h3>
      </div>
      <div class="content">
        <p class="ingr">Ingredients</p>
        <div class="content-item">${ingredientsFormatted(
          recipe.ingredients
        )}</div>
        <p class="prep">Preparation</p>
        <div class="content-item">${prepFormatted(recipe.prep)}</div>
        <div class="recipe-div-bottom">
        <button class="edit-button">edit</button>
        <button class="delete-button">delete</button>
      </div>
      `;

    overview.insertAdjacentHTML("afterbegin", html);
  }

  setLocalStorage() {
    localStorage.setItem("recipes", JSON.stringify(this.recipeLibrary));
  }

  getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("recipes"));

    let coll = document.getElementsByClassName("recipe-div");
    let i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }

  setLocalStorage() {
    localStorage.setItem("recipes", JSON.stringify(this.recipeLibrary));
  }

  getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("recipes"));

    if (!data) return;

    this.recipeLibrary = data;

    this.recipeLibrary.forEach((rec) => {
      this.renderRecipe(rec);
    });
  }

  reset() {
    localStorage.removeItem("recipes");
    location.reload();
  }
  }

function showHideForm() {
  form.classList.toggle("hide");
}

toggleFormButton.addEventListener("click", showHideForm);

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
