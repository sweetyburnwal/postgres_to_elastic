import { ConnectionOptions } from "typeorm";
import { join } from "path";
import { getEnvValue } from "../../../utils/utils";

export class MainDbConfig {
  public ensureValues(keys: string[]) {
    keys.forEach((k) => getEnvValue(k));
    return this;
  }

  public getPort() {
    return getEnvValue("PORT");
  }

  public getConfig(): ConnectionOptions {
    return {
      name: "default",
      type: "postgres",
      host: getEnvValue("POSTGRES_HOST"),
      port: parseInt(getEnvValue("POSTGRES_PORT")),
      username: getEnvValue("POSTGRES_USER"),
      password: getEnvValue("POSTGRES_PASSWORD"),
      database: getEnvValue("POSTGRES_DATABASE"),
      entities: [join(__dirname, "entities", "**/*.{ts,js}")],
      synchronize: false,
      ssl: { ca: process.env.SSL_CERT },
    };
  }
}
