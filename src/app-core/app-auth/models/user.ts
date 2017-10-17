export interface Authenticate {
  username: string;
  password: string;
  rememberMe?: boolean;
}

export interface User {
  name: string;
}
