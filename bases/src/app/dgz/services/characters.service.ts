import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  public characters: Character[] = [{ name: 'pepe', power: 333 }];

  addCharacter(char: Character) {
    this.characters.push(char);
  }

  delete(index: number) {
    console.log(index);
    this.characters.splice(index, 1);
  }
}
