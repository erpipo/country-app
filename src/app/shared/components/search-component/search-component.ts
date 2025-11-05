import { Component, input, output } from '@angular/core';

@Component({
  selector: 'search-component',
  imports: [],
  templateUrl: './search-component.html',
})
export class SearchComponent { 
  placeholder = input('buscar');
  value = output<string>();
}
