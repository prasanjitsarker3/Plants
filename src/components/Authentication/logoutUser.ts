import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { deleteCookies } from "./deleteCookies";
import { AuthKey } from "./AuthKey";

export const logoutUser = (router: AppRouterInstance) => {
  deleteCookies([AuthKey], "/");
  router.refresh();
};
