import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: 'li[contar-clicks]'
})

export class ContarClicksDirective {
    // Contador de los clicks
    clickN = 0;
    // HostBinding edita los componentes html directamente
    @HostBinding('style.opacity') opacity: number = .1;
    // HostListener escucha los eventos del componente html
    @HostListener('click', ['$event.target']) onClick(btn) {
        console.log('a', btn, 'Numero de clicks: ', this.clickN++);
        this.opacity += .1;
    }
}