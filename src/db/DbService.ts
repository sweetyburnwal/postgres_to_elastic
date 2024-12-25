import { Connection, ConnectionOptions, createConnection } from "typeorm";

export abstract class DbService {
  async initialize(): Promise<void> {
    const config = this.getConfig();
    try {
      const connection = this.connection();
      if (connection.isConnected) {
        return;
      }
    } catch (e) {
      // console.error(e);
    }
    try {
      await createConnection(config);
      console.log(
        `✅ Database connection successful: ${config.type}: ${config.database}`,
      );
    } catch (e) {
      console.error(
        `❌ Database connection failed: ${config.type}: ${config.database}`,
      );
      throw "Database connection failed";
    }
  }

  public abstract getConfig(): ConnectionOptions;

  public abstract connection(): Connection;

  public close(): Promise<void> {
    return this.connection().close();
  }
}
