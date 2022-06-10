import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/services/user/user';

@Component({
  selector: 'card-component',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss'],
})
export class CardComponent implements OnInit {
  ngOnInit(): void {}

  @Input() user: User;
}
