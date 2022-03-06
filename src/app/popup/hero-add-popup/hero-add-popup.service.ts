
import {
  HeroAddPopupComponent,
} from './hero-add-popup.component';
import { Injectable } from '@angular/core';
import { AsyncDialog } from '../async-dialogs';
import { MatDialogRef } from '@angular/material/dialog';

@Injectable({ providedIn: 'root' })
export class HeroAddPopupService extends AsyncDialog<
  HeroAddPopupComponent,
  any,
  any
> {
  async open(data: any): Promise<MatDialogRef<HeroAddPopupComponent, any>> {
    const { HeroAddPopupModule } = await import(
      '../hero-add-popup/hero-add-popup.component'
    );
    return this.matDialog.open(HeroAddPopupModule.getComponent(), data);
  }
}
