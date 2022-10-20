import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent implements OnInit {

  menuColor:boolean = false;
  colorTriangle!: string;


  constructor() { }

  ngOnInit(): void {
  }
}
