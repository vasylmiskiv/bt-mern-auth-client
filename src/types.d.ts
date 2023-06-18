type RootState = {
  auth: AuthState;
};

interface LoaderProps {
  width?: number;
  height?: number;
}

interface UserInfo {
  _id: string;
  name: string;
  email: string;
}

interface AuthState {
  userInfo: UserInfo | null;
}
