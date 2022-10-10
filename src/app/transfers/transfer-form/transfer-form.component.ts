import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TransfersService } from './../services/transfers.service';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss'],
})
export class TransferFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private service: TransfersService,
    private snackBar: MatSnackBar
  ) {

    this.form = this.formBuilder.group({
      originAccount: [null],
      destinationAccount: [null],
      transferValue: [null],
      transferDate: [null],
    });

  }

  ngOnInit(): void {}

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (result) => this.onSuccess(),
      (error) => this.onError(error.error.message)
    );
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Agendamento feito com sucesso', '', { duration: 3000 });
    this.onCancel();
  }

  private onError(error:string) {
    this.snackBar.open(error, '', {
      duration: 3000,
    });
  }
}
