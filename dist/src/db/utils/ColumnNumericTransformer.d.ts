import { ValueTransformer } from "typeorm";
export declare class ColumnNumericTransformer implements ValueTransformer {
    to(data?: number | null): number | null | undefined;
    from(data?: string | null): number | null;
}
//# sourceMappingURL=ColumnNumericTransformer.d.ts.map