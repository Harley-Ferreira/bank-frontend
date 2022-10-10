import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, take, tap, Observable } from 'rxjs';
import { PageTransfer } from '../model/pageTransfer';
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


  getTransferList(page: number, size: number): Observable<PageTransfer> {
    const params = new HttpParams()
    .set('page', page)
    .set('size', size)
    return this.httpCliente.get<any>(`${this.URL_API}?${params.toString()}`)
  }
}
