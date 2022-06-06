import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  retrieveAll(): User[] {
    return this.USERS;
  }

  retrieveById(id: number): User {
    return this.USERS.find((x) => x.id === id) || this.USERS[0];
  }

  USERS: User[] = [
    {
      id: 0,
      name: 'Giga Chad',
      email: 'gigachad@gmail.com',
      imgUrl:
        'https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/84428eae99c40b78a6d7dccd6805fc76~c5_720x720.jpeg?x-expires=1654693200&x-signature=OEVVG0DpNeVIrb26EXrlU89MOAI%3D',
    },
    {
      id: 1,
      name: 'Alanzoka',
      email: 'zokainte_alan@gmail.com',
      imgUrl:
        'https://i.pinimg.com/564x/f7/f2/a9/f7f2a9726a29b3f2666ef6664bb9e024.jpg',
    },
  ];
}
