"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleImpl = void 0;
var RoleImpl = exports.RoleImpl = /** @class */ (function () {
    function RoleImpl(authority) {
        this.authority = authority;
    }
    RoleImpl.Admin = 'Admin';
    RoleImpl.Mod = 'Mod';
    RoleImpl.RegisteredUser = 'RegisteredUser';
    return RoleImpl;
}());
