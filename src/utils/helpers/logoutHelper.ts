import { logoutService } from "@/services/auth.service";

export const logoutHelper = () => {
  logoutService()
    .then(() => {
      window.location.href = "/auth";
    })
    .catch((err) => {
      console.error(err);
    });
};
