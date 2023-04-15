import { Role } from "../role";
export declare class RoleImpl implements Role {
    readonly authority: string;
    static Admin: string;
    static Mod: string;
    static RegisteredUser: string;
    constructor(authority: string);
}
