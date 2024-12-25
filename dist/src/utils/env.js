"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDevelopmentMode = exports.isProd = exports.isBetaMode = exports.isDebug = void 0;
exports.isDebug = process.env.NODE_ENV == "debug";
exports.isBetaMode = process.env.MODE == "beta";
exports.isProd = process.env.NODE_ENV == "production";
exports.isDevelopmentMode = process.env.MODE == "development";
//# sourceMappingURL=env.js.map