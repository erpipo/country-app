import { Routes } from '@angular/router';
import { ByCapitalPage } from './pages/byCapital-page/byCapital-page';
import { ByCountryPage } from './pages/byCountry-page/byCountry-page';
import { ByRegionPage } from './pages/byRegion-page/byRegion-page';
import { CountryLayout } from './layouts/CountryLayout/CountryLayout';
import { CountryPage } from './pages/country-page/country-page';


export const countryRoutes: Routes = [

    {
        path: '',
        component: CountryLayout,
        children: [
            {
                path: 'by-capital',
                component: ByCapitalPage,
            },
            {
                path: 'by-country',
                component: ByCountryPage,
            },
            {
                path: 'by-region',
                component: ByRegionPage,
            },
            {
                path: 'by/:code',
                component: CountryPage,
            },
            {
                path: '**',
                redirectTo: 'by-capital',
            },
        ]
    },

];

export default countryRoutes;