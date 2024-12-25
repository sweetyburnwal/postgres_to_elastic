import { Module } from "@nestjs/common";
import { MainDbService } from "./db/clients/main/MainDbService";
import { SyncModule } from "./modules/sync/sync.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [SyncModule],
  controllers: [AppController],
  providers: [
    AppService,
    MainDbService,
  ],
})
export class AppModule {}
