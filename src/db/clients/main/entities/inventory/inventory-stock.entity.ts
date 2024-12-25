import { Check, Column, Entity, Index } from "typeorm";
import { MyBaseEntity } from "../base/my-base.entity";
import { ColumnNumericTransformer } from "src/db/utils/ColumnNumericTransformer";
import { UppercaseTransformer } from "src/db/utils/UpperCaseTransformer";

@Entity({ name: "InventoryStock", schema: "tran" })
export abstract class InventoryStock extends MyBaseEntity {
  @Column("bigint", { name: "CompanyId", transformer: new ColumnNumericTransformer() })
  companyId: number;

  @Column("bigint", { name: "DistributerId", transformer: new ColumnNumericTransformer() })
  distributorId: number;

  @Column("bigint", { name: "ProductId", nullable: true, transformer: new ColumnNumericTransformer() })
  productId: number;

  @Column("varchar", { name: "ProductErpId", nullable: true })
  productErpId: string;

  @Column("varchar", { name: "ProductName", nullable: true })
  productName: string | null;

  @Column("varchar", { name: "VariantName", nullable: true })
  variantName: string | null;

  @Column("varchar", { name: "BatchNo", nullable: true, transformer: new UppercaseTransformer() })
  batchNo?: string | null | undefined;

  @Column("varchar", { name: "MrpBatch", nullable: true })
  mrpBatch: string;

  @Column("timestamptz", { name: "MfgDate", nullable: true })
  mfgDate: Date | null;

  @Column("timestamptz", { name: "ExpiryDate", nullable: true })
  expiryDate: Date | null;

  @Column("bigint", { name: "CurrentStock", default: 0, transformer: new ColumnNumericTransformer() })
  currentStock: number;

  @Column("bigint", { name: "DamagedStock", default: 0, transformer: new ColumnNumericTransformer() })
  damagedStock: number;

  @Column("bigint", { name: "ExpiryStock", default: 0, transformer: new ColumnNumericTransformer() })
  expiryStock: number;

  @Column("bigint", { name: "InTransitOutBound", nullable: true, transformer: new ColumnNumericTransformer() })
  inTransitOutBound!: number;

  @Column("bigint", { name: "InTransitInBound", nullable: true, transformer: new ColumnNumericTransformer() })
  inTransitInBound!: number;

  @Column("bigint", { name: "OrderQuantity", default: 0, transformer: new ColumnNumericTransformer() })
  orderQuantity: number;

  @Column("bigint", { name: "RecievedQuantity", default: 0, transformer: new ColumnNumericTransformer() })
  receivedQuantity: number;

  @Column("varchar", { name: "SalesUnit", nullable: true })
  salesUnit: string | null;

  @Column("decimal", {
    name: "NetValue",
    default: 0,
    precision: 18,
    scale: 4,
    transformer: new ColumnNumericTransformer(),
  })
  netValue: number;

  @Column("bigint", { name: "StockInOut", default: 0, transformer: new ColumnNumericTransformer() })
  stockInOut: number;

  @Column("decimal", { name: "StandardUnitConversionFactor", default: 1, transformer: new ColumnNumericTransformer() })
  standardUnitConversionFactor: number;

  @Column("boolean", { name: "IsDeleted", default: false })
  isDeleted!: boolean;

  @Column("decimal", { name: "MRP", default: 0, precision: 18, scale: 4, transformer: new ColumnNumericTransformer() })
  mrp: number;

  @Column("decimal", {
    name: "PurchasePrice",
    default: 0,
    precision: 18,
    scale: 4,
    transformer: new ColumnNumericTransformer(),
  })
  purchasePrice: number;

  @Column("decimal", {
    precision: 12,
    scale: 2,
    default: 0,
    name: "SuperUnitConversionFactor",
    transformer: new ColumnNumericTransformer(),
  })
  superUnitConversionFactor: number;

  @Column("varchar", {
    name: "WarehouseErpId",
    transformer: new UppercaseTransformer(),
  })
  warehouseErpId: string;

  @Column("varchar", { name: "UID", transformer: new UppercaseTransformer(), unique: true })
  uid: string;

  @Column("varchar", { name: "PID", transformer: new UppercaseTransformer(), nullable: true })
  pid: string;

  @Column("bigint", { name: "PromotionalStock", default: 0, transformer: new ColumnNumericTransformer() })
  promotionalStock: number;

  @Column("varchar", { name: "MasterBatchId", nullable: true })
  masterBatchId?: string;

  @Column("bigint", { name: "GoodsInTransit", nullable: true, transformer: new ColumnNumericTransformer() })
  goodsInTransit?: number;

  @Column("bigint", { name: "TransactionUserId", transformer: new ColumnNumericTransformer(), nullable: true })
  transactionUserId!: number;

  @Column("varchar", { name: "TransactionUserErpId", nullable: true })
  transactionUserErpId!: string | null;

  @Column("varchar", { name: "TransactionUserName", nullable: true })
  transactionUserName!: string | null;

  @Column("decimal", {
    precision: 12,
    scale: 2,
    name: "StockCover",
    transformer: new ColumnNumericTransformer(),
    nullable: true,
  })
  stockCover?: number;

  @Column("bigint", { name: "BlockedStock", default: 0, transformer: new ColumnNumericTransformer() })
  blockedStock?: number;

  @Column("bigint", { name: "ReturnableStock", default: 0, transformer: new ColumnNumericTransformer() })
  returnableStock?: number;

  @Column("boolean", { name: "IsShellProduct", default: false })
  isShellProduct?: boolean;

  constructor(
    companyId: number,
    distributorId: number,
    productId: number,
    productErpId: string,
    productName: string | null,
    variantName: string | null,
    batchNo: string | null | undefined,
    mrpBatch: string,
    mfgDate: Date | null,
    expiryDate: Date | null,
    currentStock: number,
    damagedStock: number,
    expiryStock: number,
    inTransitOutBound: number,
    inTransitInBound: number,
    orderQuantity: number,
    receivedQuantity: number,
    salesUnit: string | null,
    netValue: number,
    stockInOut: number,
    standardUnitConversionFactor: number,
    isDeleted: boolean,
    mrp: number,
    purchasePrice: number,
    superUnitConversionFactor: number,
    warehouseErpId: string,
    uid: string,
    pid: string,
    promotionalStock: number,
    transactionUserId: number,
    transactionUserErpId: string | null,
    transactionUserName: string | null,
    masterBatchId?: string,
    goodsInTransit?: number,
    stockCover?: number,
    blockedStock?: number,
    returnableStock?: number,
    isShellProduct?: boolean
  ) {
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
}

export class InventoryStockDto extends InventoryStock {
  constructor({
    companyId,
    distributorId,
    productId,
    productErpId,
    productName,
    variantName,
    batchNo,
    mrpBatch,
    mfgDate,
    expiryDate,
    currentStock,
    damagedStock,
    expiryStock,
    inTransitOutBound,
    inTransitInBound,
    orderQuantity,
    receivedQuantity: receivedQuantity,
    salesUnit,
    netValue,
    stockInOut,
    standardUnitConversionFactor,
    isDeleted,
    mrp,
    purchasePrice,
    superUnitConversionFactor,
    warehouseErpId,
    uid,
    pid,
    promotionalStock,
    transactionUserId,
    transactionUserErpId,
    transactionUserName,
    masterBatchId,
    goodsInTransit,
    stockCover,
    blockedStock,
    returnableStock,
    isShellProduct,
  }: {
    companyId: number;
    distributorId: number;
    productId: number;
    productErpId: string;
    productName: string | null;
    variantName: string | null;
    batchNo: string | null | undefined;
    mrpBatch: string;
    mfgDate: Date | null;
    expiryDate: Date | null;
    currentStock: number;
    damagedStock: number;
    expiryStock: number;
    inTransitOutBound: number;
    inTransitInBound: number;
    orderQuantity: number;
    receivedQuantity: number;
    salesUnit: string | null;
    netValue: number;
    stockInOut: number;
    standardUnitConversionFactor: number;
    isDeleted: boolean;
    mrp: number;
    purchasePrice: number;
    superUnitConversionFactor: number;
    warehouseErpId: string;
    uid: string;
    pid: string;
    promotionalStock: number;
    transactionUserId: number;
    transactionUserErpId: string | null;
    transactionUserName: string | null;
    masterBatchId?: string;
    goodsInTransit?: number;
    stockCover?: number;
    blockedStock?: number;
    returnableStock?: number;
    isShellProduct?: boolean;
  }) {
    super(
      companyId,
      distributorId,
      productId,
      productErpId,
      productName,
      variantName,
      batchNo,
      mrpBatch,
      mfgDate,
      expiryDate,
      currentStock,
      damagedStock,
      expiryStock,
      inTransitOutBound,
      inTransitInBound,
      orderQuantity,
      receivedQuantity,
      salesUnit,
      netValue,
      stockInOut,
      standardUnitConversionFactor,
      isDeleted,
      mrp,
      purchasePrice,
      superUnitConversionFactor,
      warehouseErpId,
      uid,
      pid,
      promotionalStock,
      transactionUserId,
      transactionUserErpId,
      transactionUserName,
      masterBatchId,
      goodsInTransit,
      stockCover,
      blockedStock,
      returnableStock,
      isShellProduct
    );
  }
}
