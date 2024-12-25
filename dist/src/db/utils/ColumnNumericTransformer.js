"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnNumericTransformer = void 0;
class ColumnNumericTransformer {
    to(data) {
        if (!isNullOrUndefined(data)) {
            return data;
        }
        return data;
    }
    from(data) {
        if (!isNullOrUndefined(data)) {
            const res = parseFloat(data);
            if (isNaN(res)) {
                return NaN;
            }
            else {
                return res;
            }
        }
        return null;
    }
}
exports.ColumnNumericTransformer = ColumnNumericTransformer;
function isNullOrUndefined(obj) {
    return typeof obj === "undefined" || obj === null;
}
//# sourceMappingURL=ColumnNumericTransformer.js.map