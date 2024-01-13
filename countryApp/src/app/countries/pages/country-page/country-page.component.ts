import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [],
})
export class CountryPageComponent implements OnInit {
  country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CountryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => {
          return this.service.searchCountryByCode(id);
        })
      )
      .subscribe((resp) => {
        if (resp == null) {
          this.router.navigate(['/']);
          return;
        }

        this.country = resp;
      });
  }

  get translations() {
    return Object.entries(this.country!.translations);
  }
}
