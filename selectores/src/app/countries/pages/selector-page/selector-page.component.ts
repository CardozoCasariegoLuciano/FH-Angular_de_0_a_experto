import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../../services/api.service';
import { Country, Region } from '../../inferfaces/country.interface';
import { filter, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css'],
})
export class SelectorPageComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    region: ['', [Validators.required], []],
    country: ['', [Validators.required], []],
    borders: ['', [Validators.required], []],
  });
  countries?: Country[];
  borders?: Country[];

  constructor(private fb: FormBuilder, private apiService: APIService) {}

  ngOnInit(): void {
    this.onRegionChanges();
    this.onCountryChanges();
  }

  private onRegionChanges() {
    this.myForm
      .get('region')!
      .valueChanges.pipe(
        tap(() => {
          this.countries = undefined;
          this.borders = undefined;
          this.myForm.controls['country'].setValue('');
          this.myForm.controls['borders'].setValue('');
        }),
        switchMap((region) => this.apiService.getVountrysByRegions(region))
      )
      .subscribe((value) => {
        this.countries = value;
      });
  }

  private onCountryChanges() {
    this.myForm
      .get('country')!
      .valueChanges.pipe(
        tap(() => {
          this.borders = undefined;
          this.myForm.controls['borders'].setValue('');
        }),
        filter((value) => value != ''),
        switchMap((code) => this.apiService.getCountry(code)),
        switchMap((country) => {
          const codes = country.borders?.join(',') || '';
          return this.apiService.getAllCountriesByCode(codes);
        })
      )
      .subscribe((value) => {
        this.borders = value;
      });
  }

  get regions(): Region[] {
    return this.apiService.regions;
  }
}
