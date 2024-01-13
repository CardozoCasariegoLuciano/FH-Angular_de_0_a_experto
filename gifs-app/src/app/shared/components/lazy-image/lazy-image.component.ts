import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css'],
})
export class LazyImageComponent {
  @Input() url!: string;
  public isLoaded: boolean = false;

  onLoadImg() {
    console.log('Cargando imagen');
    this.isLoaded = true;
  }
}
