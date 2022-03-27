import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {fbAuthResponse, User} from "../../interfaces/interfaces";
import {Observable, tap} from "rxjs";
import {environment} from "../../../environments/environment";



@Injectable()
export class AuthService {

  constructor(private http:HttpClient) {}

  get token():string {
    return ''
  }

  login(user:User):Observable<any>{
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,user)
      .pipe(this.setToken)
  }

  logout(){

  }

  isAuthenticated():boolean{
    return !!this.token
  }

  private setToken(res: fbAuthResponse){
    console.log(res);
  }
}
