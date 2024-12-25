import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";
export declare class SyncService {
    private documentRepository;
    private configService;
    private readonly logger;
    private readonly esClient;
    constructor(documentRepository: Repository<Document>, configService: ConfigService);
    syncData(): Promise<void>;
}
//# sourceMappingURL=sync.service.d.ts.map