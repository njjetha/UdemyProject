import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();
  @Input() index:number;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    
  }

  // onSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  //   // console.log("Recipe item"+this.recipe.ingredient[0].name);
  // }
}
