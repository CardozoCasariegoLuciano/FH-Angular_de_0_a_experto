import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
})
export class SearcherComponent {
  @ViewChild('txtTagInput') SearchInput!: ElementRef<HTMLInputElement>;

  constructor(private GifsService: GifsService) {}

  serchTag() {
    const newTag = this.SearchInput.nativeElement;

    this.GifsService.addTag(newTag.value);
    newTag.value = ""
  }
}
