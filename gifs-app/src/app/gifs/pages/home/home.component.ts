import {Component} from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private gitService: GifsService) {}

  get getGifs() {
    return this.gitService.gifList;
  }
}
