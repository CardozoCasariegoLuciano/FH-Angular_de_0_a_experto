import { Component } from '@angular/core';

@Component({
  selector: 'counter-alone',
  standalone: true,
  //imports: [CommonModule],
  templateUrl: './counter-alone.component.html',
  styleUrls: ['./counter-alone.component.css'],
})
export class CounterAloneComponent {
  counter: number = 0;

  add(cant: number) {
    this.counter += cant;
  }
}
