import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  title: string;
  url: string;
}

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
  menuList: MenuItem[] = [
    { title: 'Full screen', url: '/maps/fullscreen' },
    { title: 'Zoom range', url: '/maps/zoom-range' },
    { title: 'Markers', url: '/maps/markers' },
    { title: 'Houses', url: '/maps/properties' },
    { title: 'Alone', url: '/alone' },
  ];
}
