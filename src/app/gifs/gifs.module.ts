import {NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";

import { GifPageComponent } from "./gifs-page/gifs-page.component";
import { BusquedaComponent } from "./busqueda/busqueda.component";
import { ResultadosComponent } from "./resultados/resultados.component";

import { GifsService } from "./services/gifs-service.service";

@NgModule({
    declarations:[
        GifPageComponent,
        BusquedaComponent,
        ResultadosComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        GifPageComponent,
        BusquedaComponent,
        ResultadosComponent
    ],
    providers:[
        GifsService
    ]
})

export class GifsModule {}