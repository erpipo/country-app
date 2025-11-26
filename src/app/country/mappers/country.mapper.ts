import type { Country } from "../interfaces/country.interface";
import type { RESTCountry } from "../interfaces/rest-countries.interfaces";

export class CountryMapper {
    static mapRestCountryToCountry(data: RESTCountry):Country{
        return{
            cca2: data.cca2,
            flag: data.flag,
            flagSvg: data.flags?.svg ?? '',
            coat: data.coatOfArms?.svg ?? '',
            name: data.translations['spa']?.common ?? data.name.common,
            capital: data.capital?.length ?data.capital.join(', ') : 'Sin capital',
            population: data.population,
            area: data.area,
            region: data.region,
            subregion: data.subregion,
            altSpellings: data.altSpellings ?? [],
            borders: data.borders ?? [],
        };
    }
    static mapRestCountryArrayToCountryArray(data: RESTCountry[]):Country[]{
        return data.map((resp) => CountryMapper.mapRestCountryToCountry(resp));
    }
}