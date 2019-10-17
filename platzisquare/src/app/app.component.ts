import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzisquare';
  lugares:any = [
    {active: true, nombre: 'Floreria la Gardenia'},
    {active: false, nombre: 'Donas la pasadita'},
    {active: true, nombre: 'Veterinaria Huellitas Felices'}
  ];
  

  lat:number = 19.5022012;
  lng:number = -104.3440498;

  constructor() {
    
  }

  hacerAlgo() {
    alert('Haciendo algo');
  }

}
