import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { LngLat, Map } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css'],
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') mapBox?: ElementRef;
  public zoom = 10;
  public map?: Map;
  public lngLat: LngLat = new LngLat(-58.39, -34.65);

  ngAfterViewInit(): void {
    if (!this.mapBox?.nativeElement) return;

    this.map = new Map({
      container: this.mapBox.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  mapListeners() {
    if (!this.map) throw 'Algo salio mal con el mapa';

    this.map.on('move', () => {
      this.lngLat = this.map!.getCenter();
    });

    this.map.on('zoom', () => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', () => {
      if (this.map!.getZoom() > 18) {
        this.map?.zoomTo(18);
      }
      if (this.map!.getZoom() < 2) {
        this.map?.zoomTo(2);
      }
    });
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  onInputChange(value: string) {
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);
  }
}
