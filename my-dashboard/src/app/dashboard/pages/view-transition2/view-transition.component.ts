import { Component } from '@angular/core';
import {TitleComponent} from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './view-transition.component.html',
  styleUrl: './view-transition.component.css',
})
export default class ViewTransitionComponent {}
