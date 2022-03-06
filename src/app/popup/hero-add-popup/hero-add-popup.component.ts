import { GroupService } from './../../service/group.service';
import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SuperheroListPageComponent } from 'src/app/menu-pages/superhero-list-page/superhero-list-page.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-hero-add-popup',
  templateUrl: './hero-add-popup.component.html',
  styleUrls: ['./hero-add-popup.component.css'],
})
export class HeroAddPopupComponent implements OnInit {
  groupList: any;
  constructor(
    public dialogRef: MatDialogRef<SuperheroListPageComponent>,
    public groupService: GroupService,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {}

  ngOnInit(): void {}

  getGroupList() {
    this.groupService.getGroups().subscribe((x) => {
      this.groupList = x.groupName;
    });
  }
}

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  declarations: [HeroAddPopupComponent],
})
export class HeroAddPopupModule {
  static getComponent(): typeof HeroAddPopupComponent {
    return HeroAddPopupComponent;
  }
}
