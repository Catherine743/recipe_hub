import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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
}
