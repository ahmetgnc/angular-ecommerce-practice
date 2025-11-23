import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button 
    (click)="buttonClicked.emit()" 
    class="text-black w-full px-5 py-2 rounded-xl shadow-md hover:opacity-90"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class Button {
  label = input<string>('')

  buttonClicked = output<void>();
}
