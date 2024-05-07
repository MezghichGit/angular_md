import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  private isLocalStorageAvailable = typeof sessionStorage !== 'undefined';
  authenticate(username:string, password:string) {
    if (username === "amine" && password === "1234") {



      // check everywhere you use loaclStorage
      if (this.isLocalStorageAvailable)
        {
          sessionStorage.setItem('username', username)

        }


      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    if (this.isLocalStorageAvailable)
      {
    let user = sessionStorage.getItem('username')
    return !(user === null)
      }
      return false
    //console.log(!(user === null))

  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}
