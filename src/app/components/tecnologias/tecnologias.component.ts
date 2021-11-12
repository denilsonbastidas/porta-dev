import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent implements OnInit {

  public title:string;
  
  constructor() { 
    this.title = 'Tecnologias en las que tengo conocimiento';
  }

  ngOnInit(): void {    
  }

}
