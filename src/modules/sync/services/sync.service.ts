import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { Client } from "@elastic/elasticsearch";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class SyncService {
  private readonly logger = new Logger(SyncService.name);
  private readonly esClient: Client;

  constructor(
    @InjectRepository(Document)
    private documentRepository: Repository<Document>,
    private configService: ConfigService
  ) {
    this.esClient = new Client({
      node: this.configService.get<string>("ELASTICSEARCH_NODE"),
    });
  }

  @Cron(CronExpression.EVERY_5_MINUTES)
  async syncData(): Promise<void> {
    try {
      // Fetch latest documents from PostgreSQL
      const documents = await this.documentRepository.find();

      // Bulk index documents to Elasticsearch
      const operations = documents.flatMap((doc) => [
        {
          index: {
            _index: this.configService.get<string>("ELASTICSEARCH_INDEX"),
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
    } catch (error) {
      this.logger.error("Error syncing data:", error);
    }
  }
}
