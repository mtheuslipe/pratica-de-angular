import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './info.component.html'
})

export class infoComponent implements OnInit{

    courseId!: number;

    constructor(private activatedRoute: ActivatedRoute){}

    ngOnInit(): void {
        const newLocal = this.activatedRoute.snapshot.paramMap.get('id');
        if(newLocal) {
            this.courseId= +newLocal;
        }
    }
}