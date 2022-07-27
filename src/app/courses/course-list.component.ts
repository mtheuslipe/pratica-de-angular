import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class courseListComponent implements OnInit{
    courses: Course[] = [];

    ngOnInit(): void{
        this.courses = [{
            id: 1,
            name: 'HTTP',
            imageUrl: '/assets/images/http.png',
            price: 99,
            code: 'ABC-9384',
            duration: 2,
            rating: 4.5,
            releaseDate: 'July, 4th, 2020'
        },
        {
            id: 2,
            name: 'Angular: Forms',
            imageUrl: '/assets/images/forms.png',
            price: 49.90,
            code: 'VHO-98573',
            duration: 2,
            rating: 3,
            releaseDate: 'July 4th, 2021'
        }      
        ]
    }
}