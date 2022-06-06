import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-component',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss'],
})
export class CardComponent implements OnInit {
  ngOnInit(): void {}

  @Input() name: string = 'Giga Chad';
  @Input() email: string = 'gigachad@gmail.com';
  @Input() imgUrl: string =
    'https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/84428eae99c40b78a6d7dccd6805fc76~c5_720x720.jpeg?x-expires=1654693200&x-signature=OEVVG0DpNeVIrb26EXrlU89MOAI%3D';
}
