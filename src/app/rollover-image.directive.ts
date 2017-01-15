import { 
  Directive,
  Input,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: 'img[ccRollover]'
})
export class RolloverImageDirective {

  @Input('ccRollover') config = {
    'initial':'https://unsplash.it/200/300?image=201',
    'over':'https://unsplash.it/200/300?image=202'
  }

  @HostBinding('src') private imagePath: String;

  ngOnChanges() {
    if (this.config.initial) {
      this.imagePath = this.config.initial;
    }
  }

  @HostListener('mouseover') onMouseOver() {
    this.imagePath = this.config.over;
  }

  @HostListener('mouseout') onMouseOut() {
    this.imagePath = this.config.initial;
  }

  constructor() { }

}
