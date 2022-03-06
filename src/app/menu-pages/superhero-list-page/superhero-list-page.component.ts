import { MatDialog } from '@angular/material/dialog';
import { HeroAddPopupService } from './../../popup/hero-add-popup/hero-add-popup.service';
import { HerosService } from './../../service/heros.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-superhero-list-page',
  templateUrl: './superhero-list-page.component.html',
  styleUrls: ['./superhero-list-page.component.css'],
})
export class SuperheroListPageComponent implements OnInit {
  displayedColumns = ['codeName', 'realName', 'group', 'actions'];
  @ViewChild(MatPaginator, { static: false })
  paginator: MatPaginator;
  @ViewChild(MatSort, { static: false })
  sort: MatSort;
  dataSource: any;
  currentpage = 0;
  rowPerPage = 10;
  count: any;
  row: any;

  constructor(
    private herosService: HerosService,
    public heroAddPopupService: HeroAddPopupService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.heroList();
  }

  heroList() {
    this.herosService.getHeros().subscribe((x) => {
      this.dataSource = x;
    });
  }

  async create() {
    const result = {
      id: 0,
    };
    const dialogRef = await this.heroAddPopupService.open({
      width: '700px',
      data: result,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.heroList();
    });
  }
}
