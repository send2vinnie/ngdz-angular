
export interface Sides {
  host: number;
  tenant: number;
}

export interface MultiTenancy {
  isEnabled: boolean;
  sides: Sides;
}

export interface Session {
  userId: number;
  tenantId: number;
  impersonatorUserId?: any;
  impersonatorTenantId?: any;
  multiTenancySide: number;
}

export interface CurrentCulture {
  name: string;
  displayName: string;
}

export interface Language {
  name: string;
  displayName: string;
  icon: string;
  isDefault: boolean;
  isDisabled: boolean;
}

export interface CurrentLanguage {
  name: string;
  displayName: string;
  icon: string;
  isDefault: boolean;
  isDisabled: boolean;
}

export interface Source {
  name: string;
  type: string;
}


// tslint:disable-next-line:no-empty-interface
export interface LocalizationValues {

}

export interface Localization {
  currentCulture: CurrentCulture;
  languages: Language[];
  currentLanguage: CurrentLanguage;
  sources: Source[];
  values: LocalizationValues;
}

export interface AppMaxUserCount {
  value: string;
}

export interface AppTestCheckFeature {
  value: string;
}

export interface AppTestCheckFeature2 {
  value: string;
}

export interface AppChatFeature {
  value: string;
}

export interface AppChatFeatureTenantToTenant {
  value: string;
}

export interface AppChatFeatureTenantToHost {
  value: string;
}

// tslint:disable-next-line:no-empty-interface
export interface AllFeatures {

}

export interface Features {
  allFeatures: AllFeatures;
}

// tslint:disable-next-line:no-empty-interface
export interface AllPermissions {

}

// tslint:disable-next-line:no-empty-interface
export interface GrantedPermissions {

}

export interface Auth {
  allPermissions: AllPermissions;
  grantedPermissions: GrantedPermissions;
}

export interface MainMenu {
  name: string;
  displayName: string;
  customData?: any;
  items: any[];
}

export interface Menus {
  MainMenu: MainMenu;
}

export interface Nav {
  menus: Menus;
}

// tslint:disable-next-line:no-empty-interface
export interface SettingValues {

}

export interface Setting {
  values: SettingValues;
}

export interface Clock {
  provider: string;
}

export interface Windows {
  timeZoneId: string;
  baseUtcOffsetInMilliseconds: number;
  currentUtcOffsetInMilliseconds: number;
  isDaylightSavingTimeNow: boolean;
}

export interface Iana {
  timeZoneId: string;
}

export interface TimeZoneInfo {
  windows: Windows;
  iana: Iana;
}

export interface Timing {
  timeZoneInfo: TimeZoneInfo;
}

export interface AntiForgery {
  tokenCookieName: string;
  tokenHeaderName: string;
}

export interface Security {
  antiForgery: AntiForgery;
}

export interface AbpConfig {
  multiTenancy: MultiTenancy;
  session: Session;
  localization: Localization;
  features: Features;
  auth: Auth;
  nav: Nav;
  setting: Setting;
  clock: Clock;
  timing: Timing;
  security: Security;
}





