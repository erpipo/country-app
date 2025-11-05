import { Component } from '@angular/core';
import { SearchComponent } from "../../../shared/components/search-component/search-component";
import { CountryList } from "../../../shared/components/country-list/country-list";

@Component({
  selector: 'by-country-page',
  imports: [SearchComponent, CountryList],
  templateUrl: './byCountry-page.html',
})
export class ByCountryPage { }
