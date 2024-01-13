import { Component, signal } from '@angular/core';
import {TitleComponent} from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'C' | 'D';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css',
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('D');
  public frameworks = signal<string[]>(['Angular', 'Vue', 'Svelte']);
  public frameworks2 = signal<string[]>([]);

  public order = true;

  changeIfValue() {
    this.showContent.update((val) => !val);
  }

  nextGrade() {
    this.grade.update((val) => {
      const code = val.charCodeAt(0);
      if (code === 65) {
        return String.fromCharCode(68) as Grade;
      }
      return String.fromCharCode(code - 1) as Grade;
    });
  }

  moveToLists() {
    const listFrom = this.order ? this.frameworks() : this.frameworks2();
    const listTo = !this.order ? this.frameworks() : this.frameworks2();

    const item = listFrom.pop();
    listTo.push(item!);

    if (listFrom.length === 0) {
      this.order = !this.order;
    }
  }
}
