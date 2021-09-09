import {Component} from "@angular/core";
import { GifsService } from "../services/gifs-service.service";

@Component({
    selector: "app-resultados",
    templateUrl: "resultados.component.html"
})

export class ResultadosComponent {

    get resultadosBusqueda(){
        return this.gifService.resultadosBusqueda;
    }
    
    constructor(private gifService: GifsService){}
}