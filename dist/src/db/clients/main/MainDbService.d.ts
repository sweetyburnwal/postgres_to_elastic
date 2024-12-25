import { Connection, ConnectionOptions, EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { DbService } from "src/db/DbService";
export declare class MainDbService extends DbService {
    getConfig(): ConnectionOptions;
    connection(): Connection;
    getRepository<T extends ObjectLiteral>(target: EntityTarget<T>): Repository<T>;
}
//# sourceMappingURL=MainDbService.d.ts.map