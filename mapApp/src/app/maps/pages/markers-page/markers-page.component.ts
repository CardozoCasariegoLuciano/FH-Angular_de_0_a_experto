import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

interface MarkerAndColor {
  marker: Marker;
  color: string;
}

interface StorageMarkers {
  coords: LngLat;
  color: string;
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css'],
})
export class MarkersPageComponent implements AfterViewInit {
  public map?: Map;
  public zoom = 13;
  public lngLat: LngLat = new LngLat(-58.39, -34.65);
  public markers: MarkerAndColor[] = [];
  @ViewChild('map') mapBox?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.mapBox?.nativeElement) return;

    this.map = new Map({
      container: this.mapBox.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.LoadFromLocalStorage();
  }

  navigateMatk(mark: Marker) {
    this.map?.flyTo({
      center: mark.getLngLat(),
      zoom: 14,
    });
  }

  createMarker() {
    if (!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const coords = this.map!.getCenter();
    this.addMarker(coords, color);
  }

  addMarker(coords: LngLat, color: string) {
    if (!this.map) return;

    const marker = new Marker({
      color: color,
      draggable: true,
    })
      .setLngLat(coords)
      .addTo(this.map);

    this.markers.push({ marker, color });

    marker.on('dragend', () => {
      this.saveToLocalStorage();
    });
    this.saveToLocalStorage();
  }

  deleteMarker(index: number) {
    console.log('pasa por aca', index);
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }

  saveToLocalStorage() {
    const storage: StorageMarkers[] = [];

    this.markers.forEach((marker) => {
      const storageMarker = {
        coords: marker.marker.getLngLat(),
        color: marker.color,
      };
      storage.push(storageMarker);
    });

    localStorage.setItem('markers', JSON.stringify(storage));
  }

  LoadFromLocalStorage() {
    const stringMarkers = localStorage.getItem('markers') ?? '[]';
    const markers = JSON.parse(stringMarkers) as StorageMarkers[];

    markers.forEach((mark) => {
      this.addMarker(mark.coords, mark.color);
    });
  }
}
