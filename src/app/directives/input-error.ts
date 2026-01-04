import { Directive, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputError]',
})
export class InputError implements OnChanges {
  @Input({ required: true }) error!: boolean;
  constructor(private el: ElementRef) {}
  ngOnChanges(changes: SimpleChanges): void {
      if(changes['error']){
        if(this.error){
          this.el.nativeElement.style.border = '1px solid red';
        }
        else{
          this.el.nativeElement.style.border = '';
        }
      }
  }
}
