import { Injectable } from '@angular/core';
import { User } from 'app/models/user';
import { HttpClient, HttpHeaders ,HttpResponse} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  public token: string;
constructor(private httpClient:HttpClient) { this.currentUserSubject = new BehaviorSubject<User>
  (JSON.parse(localStorage.getItem('currentUser')));
this.currentUser = this.currentUserSubject.asObservable(); }
loggedIn;// = true;

public get currentUserValue(): User {
  return this.currentUserSubject.value;
}

login(user) {
  return this.httpClient.post<any>("https://localhost:44316/api/auth/login", user)
      .pipe(map(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          this.loggedIn = true;
          return user;
      }));
}
logout() {
  localStorage.removeItem('currentUser');
  this.currentUserSubject.next(null);
  this.loggedIn = false;
}
isLoggedIn(){
  if (this.currentUserValue) { 
    return true;
}
return false;
}

register(user) {
  return this.httpClient.post<any>("https://localhost:44316/api/auth/register", user)
      .pipe(map(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          this.loggedIn = true;
          return user;
      }));
}









}
