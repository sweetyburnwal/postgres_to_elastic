import "dotenv/config";
import { isDebug, isProd } from "./env";
import * as path from "path";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require("dotenv");

export const setupEnvFile = () => {
  if (isDebug) {
    dotenv.config({ path: path.resolve(process.cwd(), ".env.develop") });
  } else if (isProd) {
    dotenv.config({ path: path.resolve(process.cwd(), ".env.prod") });
  } else {
    dotenv.config({ path: path.resolve(process.cwd(), ".env.develop") });

    // throw new Error("NODE_ENV not defined or found matching");
  }
};

export function getEnvValue(key: string): string {
  const value: string = process.env[key]!;
  if (!value) {
    throw new Error(`Env config error: missing env.${key}`);
  }
  return value;
}
