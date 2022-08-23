import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department',
  styleUrls: [],
  template:`
     <!-- <p style="width: 800px; background-color:green; color: white;">department works</p> -->
     <router-outlet></router-outlet>
     <input type="button" value="Black second" (click)="method()">

     <input type="button" value="Red first" (click)="method2()">
  `
})
export class DepartmentComponent implements OnInit {
   ngOnInit(): void {
       this.router.navigate(['department-child'], {relativeTo: this.routerActive});
   }

   constructor(private router: Router, private routerActive: ActivatedRoute){}

   method(){
       this.router.navigate(['another-child'], {relativeTo: this.routerActive});
   }

   method2(){
    this.router.navigate(['department-child'], {relativeTo: this.routerActive});
   }

}
