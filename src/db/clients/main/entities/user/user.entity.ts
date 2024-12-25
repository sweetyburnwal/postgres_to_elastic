import { Column, Entity } from 'typeorm';
import { UserRole } from '../../../../../constants/user-role';
import { StockistType } from '../../../../../constants/stockist-type';
import { MyBaseEntity } from '../base/my-base.entity';

@Entity({ name: 'UserMaster', schema: 'master' })
export class User extends MyBaseEntity {
  @Column('varchar', { name: 'EmailId', nullable: true, length: 128 })
  emailId!: string | null;

  @Column('uuid', { name: 'LoginGuid' })
  loginGuid!: string;

  @Column('int', { name: 'Role' })
  role!: UserRole;

  @Column({
    name: 'SubRole',
    type: 'enum',
    enum: StockistType,
    enumName: 'StockistType',
    nullable: true,
  })
  subRole!: StockistType | null;

  @Column('varchar', { name: 'Name', length: 128 })
  name!: string;

  @Column('bigint', { name: 'CompanyId' })
  companyId!: number;

  @Column('bigint', { name: 'FAId' })
  faId!: number;

  @Column('varchar', { name: 'Mobile', nullable: true, length: 32 })
  mobile?: string | null;

  @Column('boolean', { name: 'IsDeactive', default: false })
  isDeactive!: boolean;

  @Column('bigint', { name: 'RegionId', nullable: true })
  regionId?: number | null;

  // @ManyToOne(() => Companies, (companies) => companies.idsLogins)
  // @JoinColumn([{ name: "CompanyId", referencedColumnName: "id" }])
  // company: Companies;
}
