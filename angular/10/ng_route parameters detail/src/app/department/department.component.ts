import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments: Idepartments [] = [
    {id: 1, name: "ICT"},
    {id: 2, name: "Law"},
    {id: 3, name: "Agriculture"}
  ];


  constructor(private router: Router) { }

  ngOnInit(): void {}

  selectMethod(department){
     this.router.navigate(["/department", department.id])
  }

  aboutPage(){
    this.router.navigate(["/about"])
  }

}

export interface Idepartments{
  id: number,
  name: string
}
