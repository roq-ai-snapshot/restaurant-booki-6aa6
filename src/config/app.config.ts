interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Chef'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View restaurant details',
    'View the menu',
    'Reserve a table',
    'Update or cancel table reservation',
  ],
  ownerAbilities: [
    'Manage restaurant details',
    'Manage table details',
    'Manage menu items',
    'Invite chefs',
    'Manage table reservation requests',
  ],
};
