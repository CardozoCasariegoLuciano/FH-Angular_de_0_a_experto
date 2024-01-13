import {CommonModule} from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  @Input({ required: true, alias: 'titulo' }) public title!: string;
  @Input({ transform: booleanAttribute }) public withShadow: boolean = false;
}
