import { Role } from "./role";
export interface User {
    username: string;
    password: string;
    fullName: string;
    authorities: Set<Role>;
    nif: string;
    morada: string;
    addAuthority(r: Role): void;
    setNif(nif: string): void;
    isAccountNonExpired(): boolean;
    isAccountNonLocked(): boolean;
    isCredentialsNonExpired(): boolean;
    isEnabled(): boolean;
}
