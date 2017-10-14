import { SidenavItem } from '../app-core/app-shared/utils/sidenav-item.model';

export const ALL_APP_MENUES: SidenavItem[] = [];
// Define Menu Items here

// Top Level Item (The item to click on so the dropdown opens)
const dashboard = new SidenavItem({
  name: 'Dashboard',
  icon: 'dashboard',
  subItems: [],
  position: 1
});

// Sub Items for the Top Level Item (The items shown when you clicked on the dropdown item)
// Note: The Top Level Item is added as "parent" in those items, here "dashboard" (variable from above)
const dashboardSubItems = [
  new SidenavItem({
    name: 'Home',
    route: '/',
    parent: dashboard,
    subItems: [],
    position: 1,
    routerLinkActiveOptions: {
      exact: true
    }
  }),
  new SidenavItem({
    name: 'TEST ',
    route: '/test',
    parent: dashboard,
    subItems: [],
    position: 1
  }),
  new SidenavItem({
    name: 'Login',
    route: '/login',
    parent: dashboard,
    subItems: [],
    position: 1
  }),
];

// Push the just created Sub Items into the Top Level Item
dashboard.subItems.push(...dashboardSubItems);
ALL_APP_MENUES.push(dashboard);
