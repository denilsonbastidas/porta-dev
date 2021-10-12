import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _toggleService: ToggleService) { }

  ngOnInit(): void {
  }
  activeNav(nav: any) {
    const style = 'activeNav'
    this._toggleService.toggleShow(nav, style);
  }

}
