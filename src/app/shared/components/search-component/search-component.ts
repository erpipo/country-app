import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'search-component',
  imports: [],
  templateUrl: './search-component.html',
})
export class SearchComponent { 

  placeholder = input('buscar');

  value = output<string>();

  initialValue = input<string>();

  inputValue = linkedSignal<string>(() => this.initialValue() ?? '');

  debounceTime = input(1000);

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();
    const timeout = setTimeout(() =>{
      this.value.emit(value);
    },this.debounceTime());
    onCleanup(() =>{
      clearTimeout(timeout);
    });
  })
}
