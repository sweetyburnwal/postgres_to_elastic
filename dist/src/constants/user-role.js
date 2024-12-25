"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerRole = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole[UserRole["GlobalAdmin"] = 0] = "GlobalAdmin";
    UserRole[UserRole["AccountManager"] = 3] = "AccountManager";
    UserRole[UserRole["ChannelPartner"] = 6] = "ChannelPartner";
    UserRole[UserRole["CompanyAdmin"] = 10] = "CompanyAdmin";
    UserRole[UserRole["CompanyExecutive"] = 12] = "CompanyExecutive";
    UserRole[UserRole["GlobalSalesManager"] = 20] = "GlobalSalesManager";
    UserRole[UserRole["NationalSalesManager"] = 30] = "NationalSalesManager";
    UserRole[UserRole["ZonalSalesManager"] = 40] = "ZonalSalesManager";
    UserRole[UserRole["RegionalAdmin"] = 45] = "RegionalAdmin";
    UserRole[UserRole["RegionalSalesManager"] = 50] = "RegionalSalesManager";
    UserRole[UserRole["AreaSalesManager"] = 60] = "AreaSalesManager";
    UserRole[UserRole["Distributor"] = 70] = "Distributor";
    UserRole[UserRole["ClientEmployee"] = 80] = "ClientEmployee";
    UserRole[UserRole["Unknown"] = 1000] = "Unknown";
})(UserRole || (exports.UserRole = UserRole = {}));
var BusinessPartnerRole;
(function (BusinessPartnerRole) {
    BusinessPartnerRole[BusinessPartnerRole["Buyer"] = 1] = "Buyer";
    BusinessPartnerRole[BusinessPartnerRole["Seller"] = 2] = "Seller";
})(BusinessPartnerRole || (exports.BusinessPartnerRole = BusinessPartnerRole = {}));
//# sourceMappingURL=user-role.js.map