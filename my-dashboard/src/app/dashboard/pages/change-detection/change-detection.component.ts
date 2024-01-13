import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css',
  imports: [TitleComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectionComponent {
  public currentFrameworc = computed(() => {
    return this.frameworkSignal().name;
  });

  public frameworkSignal = signal({
    name: 'Angular',
    releaseDate: '2016',
  });

  public frameworkProperty = {
    name: 'Angular',
    releaseDate: '2016',
  };

  constructor() {
    setTimeout(() => {
      //this.frameworkProperty.name = 'React';
      this.frameworkSignal.update((val) => ({ ...val, name: 'React' }));
      console.log('DONE');
    }, 3000);
  }
}
