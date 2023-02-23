import { Component } from '@angular/core';
import * as AOS from 'aos'

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent {
  constructor() {}

  ngOnInit() {
    AOS.init()
  }
}
