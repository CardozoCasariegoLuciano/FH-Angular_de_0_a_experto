import { Component, Input } from '@angular/core';
import {Gif} from '../../interfaces/api.interfaces';

@Component({
  selector: 'app-gif-card-list',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.css']
})
export class GifCardListComponent {
  @Input() gifs: Gif[] = []

}
