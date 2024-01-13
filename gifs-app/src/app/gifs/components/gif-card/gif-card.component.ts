import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/api.interfaces';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.css'],
})
export class GifCardComponent {
  @Input() gif!: Gif;
}
