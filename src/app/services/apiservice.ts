import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  server_url: string = "http://localhost:4000"

  constructor(private http: HttpClient) { }

  // register
  registerAPI(reqBody: any) {
    return this.http.post(`${this.server_url}/register`, reqBody)
  }

  // login
  loginAPI(reqBody: any) {
    return this.http.post(`${this.server_url}/login`, reqBody)
  }

  // getAllRecipeAPI
  getAllRecipeAPI() {
    return this.http.get(`${this.server_url}/all-recipes`)
  }

  // addTestimonyAPI
  addTestimonyAPI(reqBody: any) {
    return this.http.post(`${this.server_url}/testimonials/add`, reqBody)
  }

  // appendToken() - reqHeader
  appendToken() {
    const token = sessionStorage.getItem("token")
    let headers = new HttpHeaders()
    headers = headers.append("Authorization", `Bearer ${token}`)
    return { headers }
  }

  // viewRecipeAPI
  viewRecipeAPI(recipeId: string) {
    return this.http.get(`${this.server_url}/view/${recipeId}`, this.appendToken())
  }

  // relatedRecipeAPI
  relatedRecipeAPI(cuisine: string) {
    return this.http.get(`${this.server_url}/related-recipes?cuisine=${cuisine}`, this.appendToken())
  }

  // saveRecipeAPI
  saveRecipeAPI(recipeId: string, reqBody: any) {
    return this.http.post(`${this.server_url}/save-recipe/${recipeId}`, reqBody, this.appendToken())
  }

  // getSaveRecipeAPI
  getSaveRecipeAPI() {
    return this.http.get(`${this.server_url}/save-recipe`, this.appendToken())
  }

  // deleteSaveRecipeAPI
  deleteSaveRecipeAPI(recipeId: string) {
    return this.http.delete(`${this.server_url}/save-recipe/${recipeId}/remove`, this.appendToken())
  }
}
