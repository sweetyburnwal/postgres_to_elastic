"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryStockDto = exports.InventoryStock = void 0;
const typeorm_1 = require("typeorm");
const my_base_entity_1 = require("../base/my-base.entity");
const ColumnNumericTransformer_1 = require("../../../../utils/ColumnNumericTransformer");
const UpperCaseTransformer_1 = require("../../../../utils/UpperCaseTransformer");
let InventoryStock = class InventoryStock extends my_base_entity_1.MyBaseEntity {
    constructor(companyId, distributorId, productId, productErpId, productName, variantName, batchNo, mrpBatch, mfgDate, expiryDate, currentStock, damagedStock, expiryStock, inTransitOutBound, inTransitInBound, orderQuantity, receivedQuantity, salesUnit, netValue, stockInOut, standardUnitConversionFactor, isDeleted, mrp, purchasePrice, superUnitConversionFactor, warehouseErpId, uid, pid, promotionalStock, transactionUserId, transactionUserErpId, transactionUserName, masterBatchId, goodsInTransit, stockCover, blockedStock, returnableStock, isShellProduct) {
        super();
        this.companyId = companyId;
        this.distributorId = distributorId;
        this.productId = productId;
        this.productErpId = productErpId;
        this.productName = productName;
        this.variantName = variantName;
        this.batchNo = batchNo;
        this.mrpBatch = mrpBatch;
        this.mfgDate = mfgDate;
        this.expiryDate = expiryDate;
        this.currentStock = currentStock;
        this.damagedStock = damagedStock;
        this.expiryStock = expiryStock;
        this.inTransitOutBound = inTransitOutBound;
        this.inTransitInBound = inTransitInBound;
        this.orderQuantity = orderQuantity;
        this.receivedQuantity = receivedQuantity;
        this.salesUnit = salesUnit;
        this.netValue = netValue;
        this.stockInOut = stockInOut;
        this.standardUnitConversionFactor = standardUnitConversionFactor;
        this.isDeleted = isDeleted;
        this.mrp = mrp;
        this.purchasePrice = purchasePrice;
        this.superUnitConversionFactor = superUnitConversionFactor;
        this.warehouseErpId = warehouseErpId;
        this.uid = uid;
        this.pid = pid;
        this.promotionalStock = promotionalStock;
        this.transactionUserId = transactionUserId;
        this.transactionUserErpId = transactionUserErpId;
        this.transactionUserName = transactionUserName;
        this.masterBatchId = masterBatchId;
        this.goodsInTransit = goodsInTransit;
        this.stockCover = stockCover;
        this.blockedStock = blockedStock;
        this.returnableStock = returnableStock;
        this.isShellProduct = isShellProduct;
    }
};
exports.InventoryStock = InventoryStock;
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "CompanyId", transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer() }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "companyId", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "DistributerId", transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer() }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "distributorId", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "ProductId", nullable: true, transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer() }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "ProductErpId", nullable: true }),
    __metadata("design:type", String)
], InventoryStock.prototype, "productErpId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "ProductName", nullable: true }),
    __metadata("design:type", Object)
], InventoryStock.prototype, "productName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "VariantName", nullable: true }),
    __metadata("design:type", Object)
], InventoryStock.prototype, "variantName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "BatchNo", nullable: true, transformer: new UpperCaseTransformer_1.UppercaseTransformer() }),
    __metadata("design:type", Object)
], InventoryStock.prototype, "batchNo", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "MrpBatch", nullable: true }),
    __metadata("design:type", String)
], InventoryStock.prototype, "mrpBatch", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamptz", { name: "MfgDate", nullable: true }),
    __metadata("design:type", Object)
], InventoryStock.prototype, "mfgDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamptz", { name: "ExpiryDate", nullable: true }),
    __metadata("design:type", Object)
], InventoryStock.prototype, "expiryDate", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "CurrentStock", default: 0, transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer() }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "currentStock", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "DamagedStock", default: 0, transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer() }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "damagedStock", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "ExpiryStock", default: 0, transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer() }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "expiryStock", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "InTransitOutBound", nullable: true, transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer() }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "inTransitOutBound", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "InTransitInBound", nullable: true, transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer() }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "inTransitInBound", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "OrderQuantity", default: 0, transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer() }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "orderQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "RecievedQuantity", default: 0, transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer() }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "receivedQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "SalesUnit", nullable: true }),
    __metadata("design:type", Object)
], InventoryStock.prototype, "salesUnit", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", {
        name: "NetValue",
        default: 0,
        precision: 18,
        scale: 4,
        transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer(),
    }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "netValue", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "StockInOut", default: 0, transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer() }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "stockInOut", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { name: "StandardUnitConversionFactor", default: 1, transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer() }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "standardUnitConversionFactor", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "IsDeleted", default: false }),
    __metadata("design:type", Boolean)
], InventoryStock.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { name: "MRP", default: 0, precision: 18, scale: 4, transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer() }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "mrp", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", {
        name: "PurchasePrice",
        default: 0,
        precision: 18,
        scale: 4,
        transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer(),
    }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "purchasePrice", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", {
        precision: 12,
        scale: 2,
        default: 0,
        name: "SuperUnitConversionFactor",
        transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer(),
    }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "superUnitConversionFactor", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "WarehouseErpId",
        transformer: new UpperCaseTransformer_1.UppercaseTransformer(),
    }),
    __metadata("design:type", String)
], InventoryStock.prototype, "warehouseErpId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "UID", transformer: new UpperCaseTransformer_1.UppercaseTransformer(), unique: true }),
    __metadata("design:type", String)
], InventoryStock.prototype, "uid", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "PID", transformer: new UpperCaseTransformer_1.UppercaseTransformer(), nullable: true }),
    __metadata("design:type", String)
], InventoryStock.prototype, "pid", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "PromotionalStock", default: 0, transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer() }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "promotionalStock", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "MasterBatchId", nullable: true }),
    __metadata("design:type", String)
], InventoryStock.prototype, "masterBatchId", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "GoodsInTransit", nullable: true, transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer() }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "goodsInTransit", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "TransactionUserId", transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer(), nullable: true }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "transactionUserId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "TransactionUserErpId", nullable: true }),
    __metadata("design:type", Object)
], InventoryStock.prototype, "transactionUserErpId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "TransactionUserName", nullable: true }),
    __metadata("design:type", Object)
], InventoryStock.prototype, "transactionUserName", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", {
        precision: 12,
        scale: 2,
        name: "StockCover",
        transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer(),
        nullable: true,
    }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "stockCover", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "BlockedStock", default: 0, transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer() }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "blockedStock", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "ReturnableStock", default: 0, transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer() }),
    __metadata("design:type", Number)
], InventoryStock.prototype, "returnableStock", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "IsShellProduct", default: false }),
    __metadata("design:type", Boolean)
], InventoryStock.prototype, "isShellProduct", void 0);
exports.InventoryStock = InventoryStock = __decorate([
    (0, typeorm_1.Entity)({ name: "InventoryStock", schema: "tran" }),
    __metadata("design:paramtypes", [Number, Number, Number, String, Object, Object, Object, String, Object, Object, Number, Number, Number, Number, Number, Number, Number, Object, Number, Number, Number, Boolean, Number, Number, Number, String, String, String, Number, Number, Object, Object, String, Number, Number, Number, Number, Boolean])
], InventoryStock);
class InventoryStockDto extends InventoryStock {
    constructor({ companyId, distributorId, productId, productErpId, productName, variantName, batchNo, mrpBatch, mfgDate, expiryDate, currentStock, damagedStock, expiryStock, inTransitOutBound, inTransitInBound, orderQuantity, receivedQuantity: receivedQuantity, salesUnit, netValue, stockInOut, standardUnitConversionFactor, isDeleted, mrp, purchasePrice, superUnitConversionFactor, warehouseErpId, uid, pid, promotionalStock, transactionUserId, transactionUserErpId, transactionUserName, masterBatchId, goodsInTransit, stockCover, blockedStock, returnableStock, isShellProduct, }) {
        super(companyId, distributorId, productId, productErpId, productName, variantName, batchNo, mrpBatch, mfgDate, expiryDate, currentStock, damagedStock, expiryStock, inTransitOutBound, inTransitInBound, orderQuantity, receivedQuantity, salesUnit, netValue, stockInOut, standardUnitConversionFactor, isDeleted, mrp, purchasePrice, superUnitConversionFactor, warehouseErpId, uid, pid, promotionalStock, transactionUserId, transactionUserErpId, transactionUserName, masterBatchId, goodsInTransit, stockCover, blockedStock, returnableStock, isShellProduct);
    }
}
exports.InventoryStockDto = InventoryStockDto;
//# sourceMappingURL=inventory-stock.entity.js.map