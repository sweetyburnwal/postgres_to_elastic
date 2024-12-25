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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var SyncService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const elasticsearch_1 = require("@elastic/elasticsearch");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const config_1 = require("@nestjs/config");
let SyncService = SyncService_1 = class SyncService {
    constructor(documentRepository, configService) {
        this.documentRepository = documentRepository;
        this.configService = configService;
        this.logger = new common_1.Logger(SyncService_1.name);
        this.esClient = new elasticsearch_1.Client({
            node: this.configService.get("ELASTICSEARCH_NODE"),
        });
    }
    async syncData() {
        try {
            const documents = await this.documentRepository.find();
            const operations = documents.flatMap((doc) => [
                {
                    index: {
                        _index: this.configService.get("ELASTICSEARCH_INDEX"),
                    },
                },
                {
                    id: doc.id,
                    title: doc.title,
                    content: doc.content,
                    createdAt: doc.createdAt,
                },
            ]);
            if (operations.length > 0) {
                const result = await this.esClient.bulk({ operations });
                this.logger.log(`Indexed ${documents.length} documents`);
                if (result.errors) {
                    this.logger.error("Some documents failed to index");
                }
            }
            this.logger.log("Data sync completed successfully");
        }
        catch (error) {
            this.logger.error("Error syncing data:", error);
        }
    }
};
exports.SyncService = SyncService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_5_MINUTES),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SyncService.prototype, "syncData", null);
exports.SyncService = SyncService = SyncService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Document)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        config_1.ConfigService])
], SyncService);
//# sourceMappingURL=sync.service.js.map