import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute ,Params, Router} from '@angular/router';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
   recipe: Recipe;
    id:number;

  
  constructor(private recipeService:RecipeService,
    private route:ActivatedRoute,private router:Router) {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.recipe=this.recipeService.getRecipe(this.id);
      }
    );
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
 
  OnEdit(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }


}
