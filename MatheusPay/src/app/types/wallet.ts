import { WalletType } from "./walletType";

export interface Wallet {
    fullName: string;
    cpfCnpj: string;
    email: string;
    password: string;
    balance: number;
    walletType: WalletType[];
}