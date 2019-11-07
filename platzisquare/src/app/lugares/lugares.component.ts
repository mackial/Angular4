import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  ttitle = 'lugares';

  lat:number = 19.5022012;
  lng:number = -104.3440498;

  lugares = null;

  constructor(private lugaresService: LugaresService) {
    this.lugares = lugaresService.getLugares();
  }

  hacerAlgo() {
    alert('Haciendo algo');
  }
}
