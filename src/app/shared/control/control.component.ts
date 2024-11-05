import { 
  Component,
  input, 
  ViewEncapsulation,
  HostBinding,
  HostListener,
  inject, 
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
   host: {
  class: 'control',
  '(click)': 'OnClick()'
   } 

})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
//   @HostListener('click') OnClick() {
//  console.log('clicked'); 
//   };

label = input.required<string>();
private el = inject(ElementRef);
  
OnClick() {
 console.log('clicked');
 console.log(this.el); 
 }
}
