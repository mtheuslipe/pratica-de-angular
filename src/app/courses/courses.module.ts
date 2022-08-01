import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { pipeModule } from "../shared/pipe/pip.module";


import { starModule } from "../shared/star/star.module";
import { courseListComponent } from "./course-list.component";
import { infoComponent } from "./info/info.component";


@NgModule({
    declarations:[
        courseListComponent,
        infoComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        starModule,
        pipeModule,
        RouterModule.forChild([
            {
                path: 'courses', component: courseListComponent
              },
              {
                path: 'courses/info/:id', component:infoComponent
              },
        ])
    ]
})

export class courseModule{

}