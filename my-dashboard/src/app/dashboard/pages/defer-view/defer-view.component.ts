import { Component } from '@angular/core';
import { HeavyLoadersComponentSlow } from '@shared/heavy-loaders/heavy-loaders-slow.component';

@Component({
  selector: 'app-defer-view',
  standalone: true,
  imports: [HeavyLoadersComponentSlow],
  templateUrl: './defer-view.component.html',
  styleUrl: './defer-view.component.css',
})
export default class DeferViewComponent {}
