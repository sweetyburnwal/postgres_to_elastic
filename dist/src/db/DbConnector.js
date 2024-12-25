"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDbConnection = initDbConnection;
const MainDbService_1 = require("./clients/main/MainDbService");
async function initDbConnection(app, onError, next) {
    try {
        await app.get(MainDbService_1.MainDbService).initialize();
        next();
    }
    catch (e) {
        console.error(e);
        onError(e);
    }
}
//# sourceMappingURL=DbConnector.js.map