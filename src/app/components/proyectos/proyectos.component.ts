import { Component, OnInit } from '@angular/core';
import {ProjectExterna} from '../../services/cargaExterna';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  public projectArray = ProjectExterna;
  constructor() { }

  ngOnInit(): void {
  }

}
