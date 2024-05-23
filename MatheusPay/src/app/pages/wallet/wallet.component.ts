import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/services/wallet/wallet.service';
import { Wallet } from 'src/app/types/wallet';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  public wallet!: Wallet;
  public form: FormGroup = new FormGroup({});

  private walletService = inject(WalletService);
  private router = inject(Router);

  public ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(''),
      fullName: new FormControl('', Validators.compose([Validators.required])),
      cpfCnpj: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.required),
      balance: new FormControl(''),
      walletType: new FormControl('', Validators.required),
    });
  }

  public createWallet(): void {
    if (this.form.valid) {
      const wallet = this.form.getRawValue();
      this.router.navigate(['dashboard'])
      this.walletService.createWallet(wallet);
    }
  }
}
