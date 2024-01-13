import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

export type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania' | '';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent implements OnInit {
  countries: Country[] = [];
  regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  selectedRegion?: Region;

  constructor(private service: CountryService) {}

  ngOnInit(): void {
    this.countries = this.service.cacheStorage.byRegion.countryList;
    this.selectedRegion = this.service.cacheStorage.byRegion.region;
  }

  searchByRegion(search: Region) {
    this.selectedRegion = search;
    this.service.searchRegion(search).subscribe((t) => {
      this.countries = t;
    });
  }
}
