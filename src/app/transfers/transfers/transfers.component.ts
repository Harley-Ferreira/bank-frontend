import { TransferFormComponent } from './../transfer-form/transfer-form.component';
import { TransfersService } from './../services/transfers.service';
import { Component, OnInit } from '@angular/core';

import { Transfer } from '../model/transfer';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss'],
})
export class TransfersComponent implements OnInit {
  //transfers$: Observable<Transfer[]>;
  transfersList: Transfer[] = []

  displayedColumns = [
    '_id',
    'originAccount',
    'destinationAccount',
    'transferValue',
    'transferDate',
    'schedulingDate',
  ];

  constructor(
    private transfersService: TransfersService,
    public dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    /*this.transfers$ = this.transfersService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cursos');
        return of([]);
      })
    );*/
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  onAdd() {
    this.router.navigate(['create-transfer'], {
      relativeTo: this.activatedRoute,
    });
  }

  ngOnInit(): void {
    this.getTransfers()
  }


  getTransfers() {
    this.transfersService.getTransferList().subscribe(response => {
      this.transfersList = response.content
    })
  }
}
