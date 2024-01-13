import { Component, effect, signal } from '@angular/core';
import { User } from '../../interfaces/users.interfaces';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent {
  userChangedEffect = effect(() => {
    console.log('UserEffect trigger');
    console.log(this.user().email);
  });

  user = signal<User>({
    id: 0,
    last_name: '',
    email: '12',
    first_name: '',
    avatar: '',
  });

  onFieldUpdated(field: keyof User, value: string) {
    this.user.update((current) => {
      switch (field) {
        case 'email':
          current.email = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'id':
          current.id = Number(value);
          break;
        default:
          break;
      }
      return current;
    });
  }
}
