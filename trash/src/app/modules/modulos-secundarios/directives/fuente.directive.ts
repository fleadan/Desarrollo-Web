import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appFuente]'
})
export class FuenteDirective {

  constructor(private elemento: ElementRef) {
    
   }

   @HostListener('mouseenter') enterMouseEnter(){
      this.cambio('yellow');

   }
   @HostListener('mouseleave') onMouseLeave(){
     this.cambio('yellow');
   }
   private cambio(color:string){
    this.elemento.nativeElement.style.fontsize = '20px';
    this.elemento.nativeElement.style.backgroundColor = color;
   }

}
