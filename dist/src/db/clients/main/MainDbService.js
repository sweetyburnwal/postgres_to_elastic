"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainDbService = void 0;
const typeorm_1 = require("typeorm");
const MainDbConfig_1 = require("./MainDbConfig");
const common_1 = require("@nestjs/common");
const DbService_1 = require("../../DbService");
let MainDbService = class MainDbService extends DbService_1.DbService {
    getConfig() {
        return new MainDbConfig_1.MainDbConfig().getConfig();
    }
    connection() {
        return (0, typeorm_1.getConnection)(this.getConfig().name);
    }
    getRepository(target) {
        return this.connection().getRepository(target);
    }
};
exports.MainDbService = MainDbService;
exports.MainDbService = MainDbService = __decorate([
    (0, common_1.Injectable)()
], MainDbService);
//# sourceMappingURL=MainDbService.js.map