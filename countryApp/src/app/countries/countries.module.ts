import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCuntryPageComponent } from './pages/by-cuntry-page/by-cuntry-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRouterModule } from './countries-router.module';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCuntryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountryTableComponent,
  ],
  imports: [SharedModule, CommonModule, CountriesRouterModule],
})
export class CountriesModule {}
