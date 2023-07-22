interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Recruiter'],
  customerRoles: ['Job Seeker'],
  tenantRoles: ['Recruiter', 'Consultant'],
  tenantName: 'Company',
  applicationName: 'Talllent',
  addOns: ['chat', 'notifications', 'file'],
};
