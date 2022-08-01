import { NgModule } from "@angular/core";
import { replacePipe } from "./pipe.replace";

@NgModule({
    declarations:[
        replacePipe
    ],
    exports:[
        replacePipe
    ]
})
export class pipeModule{

}