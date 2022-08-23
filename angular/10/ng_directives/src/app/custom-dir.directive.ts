import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class CustomDirDirective {

  constructor(private el: ElementRef) { } //injecting the service Elementf

  @HostListener('mouseover')
  listenerMethod(){
    this.highlight();
  }

  // @HostListener('mouseout')

  highlight(): void{
    this.el.nativeElement.style.backgroundColor = "Yellow";
  }

  // removeHighlight(){
  //   this.el.nativeElement.style.backgroundColor = "transparent";
  // }

}
