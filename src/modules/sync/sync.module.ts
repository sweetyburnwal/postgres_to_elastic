import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SyncService } from './services/sync.service';
import { InventoryStock } from 'src/db/clients/main/entities/inventory/inventory-stock.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InventoryStock])],
  providers: [SyncService],
})
export class SyncModule {}