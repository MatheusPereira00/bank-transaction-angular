import { Role } from "./role";

export interface UserRegister {
    id    : number;
    nome  : string;
    login : string;
    senha : string;
    role  : Role[];
}
