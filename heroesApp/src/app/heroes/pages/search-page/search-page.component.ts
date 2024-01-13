import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {
  searchInput = new FormControl('');
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private router: Router) {}

  searchHero() {
    const value = this.searchInput.value || '';

    this.heroService.getSugestions(value).subscribe((result) => {
      this.heroes = result;
    });
  }

  onSelectedOption(value: MatAutocompleteSelectedEvent) {
    if (!value.option.value) {
      return;
    }

    const hero: Hero = value.option.value;
    this.router.navigate(['heroes/', hero.id]);
  }
}
