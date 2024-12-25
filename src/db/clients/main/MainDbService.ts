import {
    Connection,
    ConnectionOptions,
    EntityTarget,
    getConnection,
    ObjectLiteral,
    Repository,
  } from "typeorm";
  import { MainDbConfig } from "./MainDbConfig";
  import { Injectable } from "@nestjs/common";
import { DbService } from "src/db/DbService";
  
  @Injectable()
  export class MainDbService extends DbService {
    getConfig(): ConnectionOptions {
      return new MainDbConfig().getConfig();
    }
  
    public connection(): Connection {
      return getConnection(this.getConfig().name);
    }
  
    public getRepository<T extends ObjectLiteral>(
      target: EntityTarget<T>,
    ): Repository<T> {
      return this.connection().getRepository<T>(target);
    }
  }
  