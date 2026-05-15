import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Apiservice } from '../services/apiservice';

@Component({
  selector: 'app-save-recipe',
  imports: [Header],
  templateUrl: './save-recipe.html',
  styleUrl: './save-recipe.css',
})
export class SaveRecipe {

  saveRecipe: any = []

  constructor(private api: Apiservice) { }

  ngOnInit() {
    this.getSavedRecipes()
  }

  getSavedRecipes() {
    this.api.getSaveRecipeAPI().subscribe((res: any) => {
      this.saveRecipe = res
    })
  }

  removeRecipe(id: string) {
    this.api.deleteSaveRecipeAPI(id).subscribe((res: any) => {
      alert("Recipe deleted")
      this.getSavedRecipes()
    })
  }
}
