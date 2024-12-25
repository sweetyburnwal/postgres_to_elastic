"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const user_role_1 = require("../../../../../constants/user-role");
const stockist_type_1 = require("../../../../../constants/stockist-type");
const my_base_entity_1 = require("../base/my-base.entity");
let User = class User extends my_base_entity_1.MyBaseEntity {
};
exports.User = User;
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'EmailId', nullable: true, length: 128 }),
    __metadata("design:type", Object)
], User.prototype, "emailId", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid', { name: 'LoginGuid' }),
    __metadata("design:type", String)
], User.prototype, "loginGuid", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Role' }),
    __metadata("design:type", Number)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'SubRole',
        type: 'enum',
        enum: stockist_type_1.StockistType,
        enumName: 'StockistType',
        nullable: true,
    }),
    __metadata("design:type", Object)
], User.prototype, "subRole", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Name', length: 128 }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'CompanyId' }),
    __metadata("design:type", Number)
], User.prototype, "companyId", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'FAId' }),
    __metadata("design:type", Number)
], User.prototype, "faId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Mobile', nullable: true, length: 32 }),
    __metadata("design:type", Object)
], User.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { name: 'IsDeactive', default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isDeactive", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'RegionId', nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "regionId", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({ name: 'UserMaster', schema: 'master' })
], User);
//# sourceMappingURL=user.entity.js.map