import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input() price: number = 0;
  clean: Subscription = new Subscription();

  ngOnInit(): void {
    console.log('PRICE COMPONENT: On init');
    this.clean.add(
      interval(1000).subscribe((value) => console.log(`Tick ${value}`))
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('PRICE COMPONENT: On init');
    console.log({ changes });
  }
  ngOnDestroy(): void {
    console.log('PRICE COMPONENT: On init');
    this.clean.unsubscribe();
  }
}
