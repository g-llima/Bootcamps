import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() orderBy: EventEmitter<any> = new EventEmitter();

  constructor() {}

  clickOrder(x: number) {
    this.orderBy.emit(x);
  }

  ngOnInit(): void {}
}
