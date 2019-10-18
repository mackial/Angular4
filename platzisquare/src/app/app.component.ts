import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzisquare';
  lugares:any = [
    {plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la Gardenia'},
    {plan: 'free', cercania: 1, distancia: 1.8, active: false, nombre: 'Donas la pasadita'},
    {plan: 'free', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria Huellitas Felices'},
    {plan: 'free', cercania: 3, distancia: 10, active: true, nombre: 'Tacos Lidia'},
    {plan: 'pagado', cercania: 3, distancia: 35, active: false, nombre: 'Plaza del Valle'},
    {plan: 'free', cercania: 3, distancia: 120, active: true, nombre: 'Arcade Galex'}
  ];
  

  lat:number = 19.5022012;
  lng:number = -104.3440498;

  constructor() {
    
  }

  hacerAlgo() {
    alert('Haciendo algo');
  }

}
