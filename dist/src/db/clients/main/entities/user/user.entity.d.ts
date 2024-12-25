import { UserRole } from '../../../../../constants/user-role';
import { StockistType } from '../../../../../constants/stockist-type';
import { MyBaseEntity } from '../base/my-base.entity';
export declare class User extends MyBaseEntity {
    emailId: string | null;
    loginGuid: string;
    role: UserRole;
    subRole: StockistType | null;
    name: string;
    companyId: number;
    faId: number;
    mobile?: string | null;
    isDeactive: boolean;
    regionId?: number | null;
}
//# sourceMappingURL=user.entity.d.ts.map