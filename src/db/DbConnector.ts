import { MainDbService } from "./clients/main/MainDbService";
import { INestApplication } from "@nestjs/common";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function initDbConnection(
  app: INestApplication,
  onError: (e) => void,
  next: () => void,
): Promise<void> {
  try {
    await app.get(MainDbService).initialize();
   
    next();
  } catch (e) {
    console.error(e);
    onError(e);
  }
}