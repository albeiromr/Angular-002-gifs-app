import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: 'busqueda.component.html',
})
export class BusquedaComponent {

  //buscando un elemento en el dom, parecido al useRef() de react
  @ViewChild("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>;


  buscar():void{
    const inputValue = this.txtBuscar.nativeElement.value;
    this.txtBuscar.nativeElement.value = "";
  }
}
