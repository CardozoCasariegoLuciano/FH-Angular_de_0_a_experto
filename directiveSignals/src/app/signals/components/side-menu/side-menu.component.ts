import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  url: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
  MenuList = signal<MenuItem[]>([
  { title: 'Counter', url: '/signals/counter' },
  { title: 'User info', url: '/signals/user-info' },
  { title: 'Properties', url: '/signals/properties' },
  ]);
}
