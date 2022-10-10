import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, take, tap, Observable } from 'rxjs';
import { Transfer } from '../model/transfer';

@Injectable({
  providedIn: 'root'
})
export class TransfersService {

  private readonly URL_API = 'api/transfer';

  constructor(private httpCliente: HttpClient) { }

  /*list() {
   return this.httpCliente.get<Transfer[]>(this.URL_API)
    .pipe(
      first(),
      tap(transfers => console.log(transfers))
    );
  }*/

  save(record: Transfer) {
    return this.httpCliente.post<Transfer>(this.URL_API, record)
  }


  getTransferList(): Observable<any> {
    return this.httpCliente.get<any>(this.URL_API)
  }
}
