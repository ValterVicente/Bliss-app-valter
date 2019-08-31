import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class LoadingComponent {
  @Input() name: string;
}
