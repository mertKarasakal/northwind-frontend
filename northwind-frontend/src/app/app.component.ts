import { Component } from '@angular/core';
import { AccountService } from './services/account.service';
import { Router } from '@angular/router';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent{currentUser: User;

  constructor(
      private router: Router,
      private accountService: AccountService
  ) {
      this.accountService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
      this.accountService.logout();
      this.router.navigate(['/login']);
  }}
