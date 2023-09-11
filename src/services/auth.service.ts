import { ILoginForm } from "@/components/forms/login-form/LoginForm";
import { http } from "./http.service";

export const loginService = (loginInfo: ILoginForm) => {
  return new Promise((resolve, reject) => {
    http
      .post("/api/auth/login", loginInfo)
      .then((loginResponse) => {
        console.log(loginResponse);
        resolve(loginResponse);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};

export const logoutService = () => {
  return new Promise((resolve, reject) => {
    http
      .post("/api/auth/logout")
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};
