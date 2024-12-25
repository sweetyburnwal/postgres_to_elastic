import { ValueTransformer } from "typeorm";

export class ColumnNumericTransformer implements ValueTransformer {
  to(data?: number | null): number | null | undefined {
    if (!isNullOrUndefined(data)) {
      return data;
    }
    return data;
  }

  from(data?: string | null): number | null {
    if (!isNullOrUndefined(data)) {
      const res = parseFloat(data);
      if (isNaN(res)) {
        return NaN;
      } else {
        return res;
      }
    }
    return null;
  }
}

function isNullOrUndefined<T>(obj: T | null | undefined): obj is null | undefined {
  return typeof obj === "undefined" || obj === null;
}
