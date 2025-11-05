import { Component } from '@angular/core';
import { CountryList } from "../../../shared/components/country-list/country-list";
import { SearchComponent } from "../../../shared/components/search-component/search-component";

@Component({
  selector: 'by-capital-page',
  imports: [CountryList, SearchComponent],
  templateUrl: './byCapital-page.html',
})
export class ByCapitalPage { 

  

}
