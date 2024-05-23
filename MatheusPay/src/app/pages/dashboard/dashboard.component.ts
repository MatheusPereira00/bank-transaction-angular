import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { WalletService } from 'src/app/services/wallet/wallet.service';
import { Wallet } from 'src/app/types/wallet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public wallets!: Wallet[];
  public wallet!: Wallet;
  public id!: any;

  public walletService = inject(WalletService);
  private _activedRoute = inject(ActivatedRoute);

  public findAllWalletsSubject$ = this.walletService.findAllWalletsSubject$;

  ngOnInit(): void {
    this.walletService.findAllWallets();
    this.findAllWalletsById();
  }

  public findAllWalletsById() {
    this.id = this._activedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      this.walletService.findAllWalletsById(this.id).pipe(take(1)).subscribe(wallet => {
        this.wallet = wallet;
        console.log(wallet)
      })
    }
  }
}
