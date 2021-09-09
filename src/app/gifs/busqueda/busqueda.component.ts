import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: 'busqueda.component.html',
})
export class BusquedaComponent {

  //buscando un elemento en el dom, parecido al useRef() de react
  @ViewChild("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){}

  readInput():void{
    if(this.txtBuscar.nativeElement.value.trim() !== ""){
      const inputValue = this.txtBuscar.nativeElement.value;
      this.txtBuscar.nativeElement.value = "";
      this.gifsService.buscarGift(inputValue);
    }else{
      return;
    }
  }

}
