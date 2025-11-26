import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountryList } from "../../../shared/components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { Region } from '../../interfaces/region.type';
import { ActivatedRoute, Router } from '@angular/router';

function validateQueryParam(queryParam: string){
  queryParam = queryParam.toLowerCase();

  const validRegions: Record<string, Region> = {
    africa: 'Africa',
    americas: 'Americas',
    asia: 'Asia',
    europe: 'Europe',
    oceania: 'Oceania',
    antartic: 'Antarctic',
  };
  return validRegions[queryParam] ?? 'Africa';
}

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './byRegion-page.html',
})
export class ByRegionPage {
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  countryService = inject(CountryService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router)

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('region') ?? '';
  selectedRegion = linkedSignal<Region>(() => validateQueryParam(this.queryParam));

  countryResource = rxResource({
    params: () => this.selectedRegion(),
    stream: ({ params: region }) => {
      if (!region) return of([]);
      this.router.navigate(['/country/by-region'], {
        queryParams: {
          region: region
        }
      })
      return this.countryService.searchByRegion(region);
    },
  });
}
