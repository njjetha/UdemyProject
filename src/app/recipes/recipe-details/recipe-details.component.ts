import { Component, OnInit ,Input} from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
   @Input()recipe: Recipe;

  
  constructor(private recipeService:RecipeService) { 
    //  console.log(this.recipe.name);
  }

  ngOnInit() {
    // this.recipe=this.recipeService.getRecipes();
    console.log(this.recipe.name);
  }
  
  onAddtoShoppingList(){
    console.log("Recipe Details"+this.recipe.ingredient[0].name);
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredient)
  }
 


}
