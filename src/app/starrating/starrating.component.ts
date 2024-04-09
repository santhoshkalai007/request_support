import { Component,EventEmitter,Input, Output  } from '@angular/core';

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrl: './starrating.component.css'
})
export class StarratingComponent {
  @Input() maxRating: number = 5;
  @Input() rating: number = 0;
  getStars(): number[] {
    return new Array(this.maxRating);
}
isFilled(index: number): boolean {
  return index < this.rating;
}
}
