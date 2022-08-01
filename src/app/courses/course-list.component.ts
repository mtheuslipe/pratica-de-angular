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
        this.retieveAll();
    }
    retieveAll():void{
        this.couseService.retrieveAll().subscribe({
            next: courses =>{
                this._courses=courses;
                this.filteredCourses= this._courses;
            },
            error: err =>console.log(err)
        })

    }

    deleteById(courseId:number):void{
        this.couseService.deleteById(courseId).subscribe({
            next:()=>{
                console.log('Apagado com Sucesso');
                this.retieveAll();
            },
            error: err=>console.log(err)
        })
    }

    set filter(value:string){
        this._filterBy= value;
        this.filteredCourses= this._courses.filter((course: Course)=> course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase())>-1);
    }
    get filter(){
        return this._filterBy;
    }
}