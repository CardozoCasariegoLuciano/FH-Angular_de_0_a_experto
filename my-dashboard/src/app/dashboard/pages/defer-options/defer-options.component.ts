import { Component } from '@angular/core';
import { HeavyLoadersComponentFast } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import {TitleComponent} from '@shared/title/title.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [HeavyLoadersComponentFast, TitleComponent],
  templateUrl: './defer-options.component.html',
  styleUrl: './defer-options.component.css',
})
export default class DeferOptionsComponent {}
