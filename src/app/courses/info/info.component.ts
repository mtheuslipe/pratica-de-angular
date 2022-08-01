import { core } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "../course";
import { courseService } from "../course.service";

@Component({
    templateUrl: './info.component.html'
})

export class infoComponent implements OnInit{

    course!: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService:courseService ){}

    ngOnInit(): void {
        
        const newLocal = this.activatedRoute.snapshot.paramMap.get('id');
        if(newLocal !== null){
        this.courseService.retieveById(+newLocal).subscribe({
            next: course => this.course=course,
            error: err=>console.log(err)
        }
        )
        }
    }

    save():void{
        this.courseService.save(this.course).subscribe({
            next: course=> console.log('Successfull save!!', course),
            error: err=> console.log(err)
        });
    }
}