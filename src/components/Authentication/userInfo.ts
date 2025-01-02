import { useAppSelector } from "../Redux/hooks";
import { RootState } from "../Redux/store";
import { jwtDecode } from "jwt-decode";

export const useUserInfo = () => {
  const accessToken = useAppSelector(
    (state: RootState) => state.auth.accessToken
  );

  if (!accessToken) {
    return null;
  }

  try {
    const decodedToken: { [key: string]: any } = jwtDecode(accessToken);
    return decodedToken;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
