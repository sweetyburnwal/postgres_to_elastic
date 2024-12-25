"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
const class_transformer_1 = require("class-transformer");
const env_1 = require("./utils/env");
const user_entity_1 = require("./db/clients/main/entities/user/user.entity");
let AuthGuard = class AuthGuard {
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        try {
            const domain = env_1.isDevelopmentMode
                ? "http://localhost:4030"
                : env_1.isProd
                    ? "http://dms-login-service.production.svc.cluster.local:4030"
                    : env_1.isDebug
                        ? "http://dms-login-service.develop.svc.cluster.local:4030"
                        : "--";
            const response = await axios_1.default.get(`${domain}/api/v2/login/validate-token`, {
                headers: {
                    Cookie: request.headers.cookie ?? "",
                    Authorization: request.headers.authorization ?? "",
                },
            });
            const userJson = response.data;
            request.user = (0, class_transformer_1.plainToInstance)(user_entity_1.User, userJson);
            return true;
        }
        catch (e) {
            console.error(e);
            throw new common_1.UnauthorizedException();
        }
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)()
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map