import { Component, inject, signal } from '@angular/core';
import { CountryList } from "../../../shared/components/country-list/country-list";
import { SearchComponent } from "../../../shared/components/search-component/search-component";
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'by-capital-page',
  imports: [CountryList, SearchComponent],
  templateUrl: './byCapital-page.html',
})
export class ByCapitalPage { 

  countryService = inject(CountryService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router)

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

  query = signal(this.queryParam);

  countryResource = rxResource({
    params: () => this.query(),
    stream: ({ params: query }) => {
      console.log(query);
      if (!query) return of([]);
      this.router.navigate(['/country/by-capital'], {
        queryParams: {
          query: query
        }
      })
      return this.countryService.searchByCapital(query);
    },
  });
}
