import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  images:string[] =[
    "imagen1.png",
    "imagen2.png",
    "imagen3.png",
    "imagen4.png",
    "imagen5.png",
    "imagen6.png",
    "imagen7.png",
    "imagen8.png",
  ]

  constructor() {}

}
