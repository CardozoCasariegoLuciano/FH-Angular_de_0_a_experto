import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
  public reactiveMenu: MenuItem[] = [
    { title: 'basicos', route: './reactive/basic' },
    { title: 'dynamics', route: './reactive/dynamic' },
    { title: 'switches', route: './reactive/switches' },
  ];

  public authMenu: MenuItem[] = [{ title: 'register', route: './auth/register' }];
}
