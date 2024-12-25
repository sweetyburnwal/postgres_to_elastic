import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  ping(): string {
    return "Ping success. Welcome to DMS Payment microservice";
  }
}
