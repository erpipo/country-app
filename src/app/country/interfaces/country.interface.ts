import { Currencies } from "./rest-countries.interfaces";

export interface Country {
    cca2: string;
    flag: string
    flagSvg: string;
    coat: string;
    name: string;
    capital: string;
    population: number;
    area: number;
    region: string;
    subregion: string;
    altSpellings: string[],
    borders: string[],
}