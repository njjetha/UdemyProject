import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'
// import * as EventEmitter from 'events';


export class ShoppingListService{


    ingredientChanged=new EventEmitter<Ingredient[]>();


    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIngredients(){
          return this.ingredients.slice();
      }


      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
      }


      addIngredients(ingredient: Ingredient[]) {
        // for(let el of ingredient)
        //   this.addIngredient(el);
      
        this.ingredients.push(...ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
      
      }
}