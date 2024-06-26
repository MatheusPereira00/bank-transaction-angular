import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject, take, tap } from 'rxjs';
import { Transfer } from 'src/app/types/transfer';
import { Wallet } from 'src/app/types/wallet';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private http = inject(HttpClient);

  private walletSubject = new Subject<Wallet>();
  public walletSubject$ = this.walletSubject.asObservable();

  private findAllWalletsSubject = new Subject<Wallet[]>();
  public findAllWalletsSubject$ = this.findAllWalletsSubject.asObservable();

  public createWallet(wallet: Wallet) {
    return this.http
      .post<Wallet>(`${environment.wallet}`, wallet)
      .pipe(take(1))
      .subscribe((wallet) => {
        this.walletSubject.next(wallet);
      });
  }

  public findAllWallets() {
    return this.http
      .get<Wallet[]>(`${environment.wallet}`)
      .pipe(take(1))
      .subscribe((wallets) => { this.findAllWalletsSubject.next(wallets); })
  }

  public findAllWalletsById(id: number) {
    return this.http.get<Wallet>(`${environment.wallet}/${id}`);
  }

  public sendTransfer(value: number, payer: number, payee: number): Observable<Transfer> {
    const body = { value, payer, payee }
    return this.http
      .post<Transfer>(`${environment.walletTransfer}`, body).pipe(tap(
        transfer => {
          console.log(transfer);
        }
      ))
  }
}
