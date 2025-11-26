// import { inject, resource } from '@angular/core';
// import { CountryService } from '../../country/services/country.service';
// import { firstValueFrom } from 'rxjs';



// export class CountryResource {
//     countryService = inject(CountryService);
//     countryResource = resource({
//     params: () => ({ query: this.query() }),
//     loader: async ({ params }) => {
//       if(!params.query) return [];
//       return await firstValueFrom(
//         this.countryService.searchByCapital(params.query)
//       );
//     }
//   });
// }