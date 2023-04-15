import { Role } from "../role";

export class RoleImpl implements Role {
    static Admin = 'Admin';
    static Mod = 'Mod';
    static RegisteredUser = 'RegisteredUser';
  
    constructor(public readonly authority: string) {}
  }