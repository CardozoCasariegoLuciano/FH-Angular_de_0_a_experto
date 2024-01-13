import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css'],
})
export class ByCapitalPageComponent implements OnInit {
  countries: Country[] = [];
  term = '';
  constructor(private service: CountryService) {}

  ngOnInit(): void {
    this.countries = this.service.cacheStorage.byCapitals.countryList;
    this.term = this.service.cacheStorage.byCountry.term;
  }

  searchByCapital(search: string) {
    this.service.searchCapital(search).subscribe((t) => {
      this.countries = t;
    });
  }
}
