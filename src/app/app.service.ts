import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'


@Injectable({
    providedIn: 'root'
  })
  export class AppService {
    baseUrl = 'https://anirbas-demo.herokuapp.com';

    constructor (private http: HttpClient) {}
  
    getAllUser() {
      return this.http.get(this.baseUrl + '/users');
    }

    getSelectedUser(id: number) {
        return this.http.get(this.baseUrl + '/users/' + id);
      }

    getFilteredTasks() {
        return this.http.get(this.baseUrl + '/tasks');
    }

    getTask(id: number) {
      console.log(this.http.get(this.baseUrl + '/tasks/' + id))
        return this.http.get(this.baseUrl + '/tasks/' + id);
    }

    createUser(body: any) {
      return this.http.post(this.baseUrl + '/users', body);
    }
  }