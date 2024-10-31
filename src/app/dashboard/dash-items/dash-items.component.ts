import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dash-items',
  standalone: true,
  imports: [],
  templateUrl: './dash-items.component.html',
  styleUrl: './dash-items.component.css'
})
export class DashItemsComponent {
  // @Input({required: true})  image!: {scr: string; alt: string};
  // @Input({required: true}) title!: string;

  image = input.required<{src: string; alt: string}>();
 title = input.required<string>();
}


