import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

// De esta manera creamos una directiva para utilizar en  el html
// Direcitvas como ngStyle, etc.

@Directive({
    // En esta parte indicamos la palabra que llamara la directiva
    selector: '[resaltar]'
})

export class ResaltarDirective implements OnInit {
    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    @Input ('resaltar') plan: string = '';

    ngOnInit() {
        if (this.plan === 'pagado') {
            this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
            this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
        }
    }
}