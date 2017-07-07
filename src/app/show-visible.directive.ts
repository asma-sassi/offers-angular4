import {Directive, HostListener, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[show-visible]'
})
export class ShowVisibleDirective {



  constructor(private elm:ElementRef, private renderer:Renderer2) {
  }

  ngOnInit(){

  }

  @HostListener("window:scroll",["$event"])
  test(e){
    var height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
    if(this.elm.nativeElement.getBoundingClientRect().top < height*70/100){
      if(this.elm.nativeElement.className.indexOf('show-visible-on') < 0) {
        this.renderer.addClass(this.elm.nativeElement, "show-visible-on");
      }

    }

  }

}
