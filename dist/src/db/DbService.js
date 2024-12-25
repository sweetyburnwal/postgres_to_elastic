"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbService = void 0;
const typeorm_1 = require("typeorm");
class DbService {
    async initialize() {
        const config = this.getConfig();
        try {
            const connection = this.connection();
            if (connection.isConnected) {
                return;
            }
        }
        catch (e) {
        }
        try {
            await (0, typeorm_1.createConnection)(config);
            console.log(`✅ Database connection successful: ${config.type}: ${config.database}`);
        }
        catch (e) {
            console.error(`❌ Database connection failed: ${config.type}: ${config.database}`);
            throw "Database connection failed";
        }
    }
    close() {
        return this.connection().close();
    }
}
exports.DbService = DbService;
//# sourceMappingURL=DbService.js.map