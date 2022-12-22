import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { persons } from './persons';
// import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  

  columnNames = ['name', 'surname', 'amount']; 

  persons = new MatTableDataSource(persons);

  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  // @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};
  // @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  // @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  ngOnInit(): void {
    // this.persons.sort = this.sort;
    this.persons.paginator = this.paginator;
  } 

}


