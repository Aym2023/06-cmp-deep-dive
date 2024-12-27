import {
  Component,
  input,
  ViewEncapsulation,
  HostBinding,
  HostListener,
  inject,
  ElementRef,
  ContentChild,
  contentChild,
  AfterContentInit,
  afterRender,
  afterNextRender,
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
export class ControlComponent implements AfterContentInit{
  // @HostBinding('class') className = 'control';
//   @HostListener('click') OnClick() {
//  console.log('clicked');
//   };

label = input.required<string>();
private el = inject(ElementRef);

// @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

constructor () {
  afterRender(() => {
    console.log('AFTER RENDER');
  });

  afterNextRender(() => {
    console.log('AFTER NEXT RENDER');
  } );
}

ngAfterContentInit() {
  
}

OnClick() {
 console.log('clicked');
 console.log(this.el)
 console.log(this.control());
 }
}
