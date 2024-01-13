import { Component, computed, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent {
  counter = signal(0);
  squareCounter = computed(() => this.counter() * this.counter());

  increaseBy(num: number) {
    this.counter.update((prev) => prev + num);
  }
}
