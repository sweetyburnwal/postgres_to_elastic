import { ValueTransformer } from "typeorm";

export class UppercaseTransformer implements ValueTransformer {
  to(data?: number | null): any | null | undefined {
    return data;
  }

  from(data?: string | null): string | null | undefined {
    return data?.toString()?.toUpperCase();
  }
}
