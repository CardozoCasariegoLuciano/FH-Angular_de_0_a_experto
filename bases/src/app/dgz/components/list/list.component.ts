import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output() deleteItem: EventEmitter<number> = new EventEmitter();
  list!: Character[];

  constructor(private charServ: CharactersService) {
    this.list = this.charServ.characters;
  }

  eliminar(index: number) {
    this.deleteItem.emit(index);
  }
}
