export interface AuthUser {
  name?: string;
  email: string;
  password: string;
  checkout?: boolean;
  dialogId?: string;
}
