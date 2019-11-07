import { Injectable } from "@angular/core";

@Injectable()
export class LugaresService {
    lugares: any = [
        {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la Gardenia'},
        {id: 2, plan: 'free', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita'},
        {id: 3, plan: 'free', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria Huellitas Felices'},
        {id: 4, plan: 'free', cercania: 3, distancia: 10, active: true, nombre: 'Tacos Lidia'},
        {id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: 'Plaza del Valle'},
        {id: 6, plan: 'free', cercania: 3, distancia: 120, active: true, nombre: 'Arcade Galex'}
      ];

      public getLugares() {
          return this.lugares;
      }

      buscarLugar(id) {
        return this.lugares.filter((lugar) => { return lugar.id == id})[0] || null;
      }
}