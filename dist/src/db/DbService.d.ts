import { Connection, ConnectionOptions } from "typeorm";
export declare abstract class DbService {
    initialize(): Promise<void>;
    abstract getConfig(): ConnectionOptions;
    abstract connection(): Connection;
    close(): Promise<void>;
}
//# sourceMappingURL=DbService.d.ts.map