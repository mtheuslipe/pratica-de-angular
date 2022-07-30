import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { courseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html'
})

export class courseListComponent implements OnInit{
    courses: Course[] = [];
    
    filteredCourses: Course[]=[];

    _courses: Course[]=[];
    _filterBy!: string;

    constructor(private couseService: courseService){}
    ngOnInit(): void{
        this._courses=this.couseService.retrieveAll();
        this.filteredCourses= this._courses;
    }

    set filter(value:string){
        this._filterBy= value;
        this.filteredCourses= this._courses.filter((course: Course)=> course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase())>-1);
    }
    get filter(){
        return this._filterBy;
    }
}