import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import axios from "axios";
import { plainToInstance } from "class-transformer";
import { isDebug, isDevelopmentMode, isProd } from "./utils/env";
import { User } from "./db/clients/main/entities/user/user.entity";

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    try {
      const domain = isDevelopmentMode
        ? "http://localhost:4030"
        : isProd
        ? "http://dms-login-service.production.svc.cluster.local:4030"
        : isDebug
        ? "http://dms-login-service.develop.svc.cluster.local:4030"
        : "--";

      const response = await axios.get(
        `${domain}/api/v2/login/validate-token`,
        {
          headers: {
            Cookie: request.headers.cookie ?? "",
            Authorization: request.headers.authorization ?? "",
          },
        }
      );

      const userJson = response.data;
      request.user = plainToInstance(User, userJson);
      return true;
    } catch (e) {
      console.error(e);
      throw new UnauthorizedException();
    }
  }
}
