import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Apiservice } from '../services/apiservice';

@Component({
  selector: 'app-view-recipe',
  imports: [Header, RouterLink],
  templateUrl: './view-recipe.html',
  styleUrl: './view-recipe.css',
})
export class ViewRecipe {

  recipeId: string = ""
  recipe: any = {}
  allRelatedRecipes: any = []

  constructor(private route: ActivatedRoute, private api: Apiservice) { }

  ngOnInit() {
    this.route.params.subscribe((res: any) => {
      console.log(res);
      this.recipeId = res.id
      this.getRecipeDetails(this.recipeId)
    })
  }

  getRecipeDetails(recipeId: string) {
    this.api.viewRecipeAPI(recipeId).subscribe((res: any) => {
      this.recipe = res
      console.log(this.recipe);
      this.getRelatedRecipe(res.cuisine)
    })
  }

  getRelatedRecipe(cuisine: string) {
    this.api.relatedRecipeAPI(cuisine).subscribe((res: any) => {
      if (res.length > 1) {
        this.allRelatedRecipes = res.filter((item: any) => item.name != this.recipe.name)
      }
      else {
        this.allRelatedRecipes = []
      }
    })
  }

  saveRecipe() {
    this.api.saveRecipeAPI(this.recipeId, this.recipe).subscribe({
      next: (res: any) => {
        alert("Recipe added to saved collection")
      },
      error: (reason: any) => {
        alert(reason.error)
      }
    })
  }
}
