import { Component } from '@angular/core';
import { Colors, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  isUpperCase = false;
  heroes: Hero[] = [
    {
      name: 'superman',
      canFly: true,
      color: Colors.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Colors.black,
    },
    {
      name: 'Flash',
      canFly: false,
      color: Colors.red,
    },
    {
      name: 'Elastic man',
      canFly: false,
      color: Colors.yellow,
    },
  ];

  sortType: keyof Hero = 'name';
  isDec = true;

  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }

  setSortType(type: keyof Hero) {
    if (type === this.sortType) this.isDec = !this.isDec;
    this.sortType = type;
  }
}
