import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Input() placeholder: string = '';
  @Input() initialValue: string = '';
  @Output() searchValue: EventEmitter<string> = new EventEmitter();

  private debouncer: Subject<string> = new Subject();
  debounceSubs?: Subscription;

  ngOnInit(): void {
    this.debounceSubs = this.debouncer
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.searchValue.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debounceSubs?.unsubscribe();
  }

  sendValue(value: string) {
    this.debouncer.next(value);
  }
}
