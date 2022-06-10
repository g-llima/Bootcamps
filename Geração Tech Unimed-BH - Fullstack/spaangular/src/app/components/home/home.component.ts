import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  _USERS: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this._USERS = this.userService.retrieveAll();
  }

  clicouDelete(id: number) {
    this.userService.userDelete(id);
    this._USERS = this.userService.retrieveAll();
  }
}
