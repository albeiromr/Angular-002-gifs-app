import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core";

import { GifsService } from "../gifs/services/gifs-service.service";

import { SidebarComponent } from "./sidebar/sidebar.component";


@NgModule({
    declarations:[
        SidebarComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        SidebarComponent
    ],
    providers:[
        GifsService
    ]
})

export class SharedModule {}