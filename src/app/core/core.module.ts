import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { error404Component } from "./component/error-404/error-404.component";
import { navBar } from "./component/nav-bar/nav-bar.component";

@NgModule({
    declarations:[
        navBar,
    ],
    imports:[
        RouterModule.forChild([
            {
                path: '**', component: error404Component
            },
        ])
    ],
    exports:[
        navBar
    ]
})

export class coreModule{

}