import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  selector: 'app-full-scren-page',
  templateUrl: './full-scren-page.component.html',
  styleUrls: ['./full-scren-page.component.css'],
})
export class FullScrenPageComponent implements AfterViewInit {
  @ViewChild('map') mapBox?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.mapBox?.nativeElement) return;

    const map = new Map({
      container: this.mapBox.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }

}
