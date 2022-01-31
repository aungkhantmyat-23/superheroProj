import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TestTableDataSource, TestTableItem } from './grouptable-datasource';

@Component({
  selector: 'app-grouptable',
  templateUrl: './grouptable.component.html',
  styleUrls: ['./grouptable.component.css']
})
export class TestTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TestTableItem>;
  dataSource: TestTableDataSource;

  
  displayedColumns = ['id', 'groupName'];

  constructor() {
    this.dataSource = new TestTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
