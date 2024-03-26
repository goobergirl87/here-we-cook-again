"use strict";

class Recipe {
  date = new Date();
  id = (Date.now() + "").slice(-10);

  constructor(name, time, kind, wokeness, ingredients) {
    this.name = name;
    this.time = time;
    this.kind = kind;
    this.wokeness = wokeness;
    this.ingredients = ingredients;
  }
}

class Library {
  recipeLibrary = [];
}

const library = new Library();
