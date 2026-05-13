import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Apiservice } from '../services/apiservice';
import { Router } from '@angular/router'


@Component({
  selector: 'app-recipe',
  imports: [Header],
  templateUrl: './recipe.html',
  styleUrl: './recipe.css',
})
export class Recipe {

  allRecipes: any[] = []
  allRecipesDummy: any[] = []

  constructor(private api: Apiservice, private router: Router) { }

  ngOnInit() {
    this.getAllRecipes()
  }

  getAllRecipes() {
    this.api.getAllRecipeAPI().subscribe((res: any) => {
      this.allRecipes = res
      this.allRecipesDummy = this.allRecipes
      // console.log(this.allRecipes);
    })
  }

  filterRecipes(key: string, value: string) {
    this.allRecipes = this.allRecipesDummy.filter((item: any) => item[key].includes(value))
  }

  
}
