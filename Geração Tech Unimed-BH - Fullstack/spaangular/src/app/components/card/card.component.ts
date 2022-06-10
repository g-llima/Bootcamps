import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/services/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'card-component',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  @Input() user: User;
  @Output() clickChildren = new EventEmitter();

  onDelete(id: number) {
    this.clickChildren.emit(id);
  }
}
