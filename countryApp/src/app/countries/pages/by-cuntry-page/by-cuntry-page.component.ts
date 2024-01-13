import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-cuntry-page',
  templateUrl: './by-cuntry-page.component.html',
  styles: [],
})
export class ByCuntryPageComponent implements OnInit {
  countries: Country[] = [];
  term = '';
  constructor(private service: CountryService) {}

  ngOnInit(): void {
    this.countries = this.service.cacheStorage.byCountry.countryList;
    this.term = this.service.cacheStorage.byCountry.term;
  }

  searchByName(search: string) {
    this.service.searchCountry(search).subscribe((t) => {
      this.countries = t;
    });
  }
}
