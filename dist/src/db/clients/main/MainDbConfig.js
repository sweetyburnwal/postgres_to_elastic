"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainDbConfig = void 0;
const path_1 = require("path");
const utils_1 = require("../../../utils/utils");
class MainDbConfig {
    ensureValues(keys) {
        keys.forEach((k) => (0, utils_1.getEnvValue)(k));
        return this;
    }
    getPort() {
        return (0, utils_1.getEnvValue)("PORT");
    }
    getConfig() {
        return {
            name: "default",
            type: "postgres",
            host: (0, utils_1.getEnvValue)("POSTGRES_HOST"),
            port: parseInt((0, utils_1.getEnvValue)("POSTGRES_PORT")),
            username: (0, utils_1.getEnvValue)("POSTGRES_USER"),
            password: (0, utils_1.getEnvValue)("POSTGRES_PASSWORD"),
            database: (0, utils_1.getEnvValue)("POSTGRES_DATABASE"),
            entities: [(0, path_1.join)(__dirname, "entities", "**/*.{ts,js}")],
            synchronize: false,
            ssl: { ca: process.env.SSL_CERT },
        };
    }
}
exports.MainDbConfig = MainDbConfig;
//# sourceMappingURL=MainDbConfig.js.map