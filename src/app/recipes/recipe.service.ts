import {EventEmitter, Injectable} from '@angular/core'
import {Recipe} from './recipe.model';
 import {Ingredient} from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    
     recipeSelected=new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Burger',
         'Burger is American ', 
         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
           new Ingredient('Meat',1)
         ]),
        new Recipe('Pizza', 
        'American chopsy Pizza'
        , 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
          new Ingredient('French Fries',2)
        ])
      ];
    
      constructor(private shoppingListService:ShoppingListService){}
      getRecipes(){
        return this.recipes.slice();
      }
      getRecipe(id:number){
        return this.recipes.slice()[id];
      }
      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
        console.log(ingredients[0].name);
      }

}