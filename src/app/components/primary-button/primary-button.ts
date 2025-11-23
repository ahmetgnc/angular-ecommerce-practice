import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button 
    (click)="buttonClicked.emit()" 
    class="bg-blue-500 text-white  w-full px-5 py-2 rounded-xl shadow-md hover:opacity-90"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class PrimaryButton {
  label = input<string>('')

  buttonClicked = output<void>();
}
