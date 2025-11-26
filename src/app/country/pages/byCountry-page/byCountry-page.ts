import { Component, inject, resource, signal } from '@angular/core';
import { SearchComponent } from "../../../shared/components/search-component/search-component";
import { CountryList } from "../../../shared/components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'by-country-page',
  imports: [SearchComponent, CountryList],
  templateUrl: './byCountry-page.html',
})
export class ByCountryPage { 
  countryService = inject(CountryService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  query = signal(this.queryParam);

  countryResource = rxResource({
    params: () => this.query(),
    stream: ({ params: query }) => {
      if (!query) return of([]);
      this.router.navigate(['country/by-country'], {
        queryParams: {
          query: query
        }
      })
      return this.countryService.searchByCountry(query);
    },
  });
}
