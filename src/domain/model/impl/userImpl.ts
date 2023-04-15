
// import { User } from '../user';
// import { Role } from '../role';

// import { Set } from 'typescript-collections';

// export class UserImpl implements User {
//     public userId: number | undefined;
//     public username: string;
//     public password: string;
//     public fullName: string;
//     public authorities: Set<Role> = new Set<Role>();
//     public nif: string;
//     public morada: string;
  
//     constructor(
//       username: string,
//       password: string,
//       fullName: string,
//       nif: string,
//       morada: string,
//     ) {
//       this.username = username;
//       this.password = password;
//       this.fullName = fullName;
//       this.nif = nif;
//       this.morada = morada;
//     }
  
//     public addAuthority(authority: Role): void {
//       this.authorities.add(authority);
//     }
  
//     public setNif(nif: string): void {
//       if (nif.length !== 9) {
//         throw new Error("NIF must be 9 characters.");
//       }
//       this.nif = nif;
//     }
  
//     public isAccountNonExpired(): boolean {
//       return true;
//     }
  
//     public isAccountNonLocked(): boolean {
//       return true;
//     }
  
//     public isCredentialsNonExpired(): boolean {
//       return true;
//     }
  
//     isEnabled(): boolean {
//         return true;
//       }
//   }