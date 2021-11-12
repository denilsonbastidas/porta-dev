import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent implements OnInit {

  @ViewChild('contThemes', { static: true }) contThemes!: ElementRef;
  @ViewChild('triangule', { static: true }) triangule!: ElementRef;
  public theme:string | undefined;
  public themeLocal:any | undefined;
  public openthemes:boolean | undefined;


  constructor(
    private _toggleService: ToggleService,) { }

  ngOnInit(): void {
  }
  showHeight() {    
    const style = 'activeHeight';
    this._toggleService.toggleThemes(this.contThemes.nativeElement, style)
  }
  colorBlue(){
  }
 
}
