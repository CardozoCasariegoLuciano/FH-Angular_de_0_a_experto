import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  isProductVisible = true;
  price = 400;

  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('NgOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('NgOnChanges', { changes });
  }
  ngDoCheck(): void {
    console.log('NgDuCheck');
  }
  ngAfterContentInit(): void {
    console.log('NgAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('NgAfterContentCheck');
  }
  ngAfterViewChecked(): void {
    console.log('NgAfterViewCheked');
  }
  ngAfterViewInit(): void {
    console.log('NgAfterViewInit');
  }
  ngOnDestroy(): void {
    console.log('NgOnDestroy');
  }

  increasePrice() {
    this.price++;
  }
}
