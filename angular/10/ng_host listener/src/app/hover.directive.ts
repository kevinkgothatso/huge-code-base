import { Directive , HostListener} from '@angular/core';

@Directive({
  selector: '[Hover]'
})
export class HoverDirective {

  constructor() { }
  @HostListener('mouseover')
  mouseOverMethod(){
      alert("Mouse over event using directive");
  }

}
