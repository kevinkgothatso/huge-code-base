import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router , ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template:`
    <div class="detail">
        department ID:  {{departmentID}}
        <input type="button" value="next" (click)="next()">
        <input type="button" value="prevous" (click)="previous()">
        <input type="button" value="back" (click)="back()">
    </div>
  `
})

export class DepartmentDetailComponent implements OnInit {
  public departmentID;


  constructor(private active_route: ActivatedRoute , private route: Router){}
  ngOnInit(): void {

      this.active_route.paramMap.subscribe(
        (param: ParamMap)=>{
          let  id = parseInt(this.active_route.snapshot.paramMap.get('id'));
          this.departmentID = id;
          console.log(this.departmentID);
        }
      );
  }


  previous(){
    let previousId = this.departmentID -1;
    this.route.navigate(['./department',previousId]);
  }
  next(){
    let nextId = this.departmentID+1;
    this.route.navigate(['./department',nextId]);
  }

  back(){
    this.route.navigate(['/department']); //non-optional route

    // let selectedID = this.departmentID?  this.departmentID:null;
    // this.route.navigate(['/department',{id:selectedID}]);
  }

}

