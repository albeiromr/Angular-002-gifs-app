import {NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";

import { GifPageComponent } from "./gifs-page/gifs-page.component";
import { BusquedaComponent } from "./busqueda/busqueda.component";
import { ResultadosComponent } from "./resultados/resultados.component";

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

    ]
})

export class GifsModule {}