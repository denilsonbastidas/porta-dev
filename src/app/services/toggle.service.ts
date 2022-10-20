import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  private renderer: Renderer2;
  public open: boolean = false;
  public anchoPantalla: any;

  // >>>>
  public openBlue:boolean;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.anchoPantalla = window.innerWidth;
    this.openBlue = false;
  }
  //? >>>>>> Efectos toggle >>>>>>>>>>
  // solo para smallphone
  toggleShow(element: any, val: string) {
    if (!this.open && this.anchoPantalla < 496) {
      this.renderer.addClass(element, val);
      this.open = true;
    } else {
      this.renderer.removeClass(element, val);
      this.open = false;
    }
  }
}
