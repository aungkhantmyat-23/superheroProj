import { Directive } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Directive()
export abstract class AsyncDialog<
  ComponentType,
  DataType,
  ReturnType = unknown
> {
  constructor(protected matDialog: MatDialog) {}
  abstract open(
    data: DataType
  ): Promise<MatDialogRef<ComponentType, ReturnType>>;
}
