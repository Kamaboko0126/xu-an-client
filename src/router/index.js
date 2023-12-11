import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/components/LoginPage";
import HomePage from "@/components/HomePage";
import SignUpPage from "@/components/SignUpPage";
import VerifyPage from "@/components/VerifyPage";
import UserInfoPage from "@/components/UserInfoPage";
import ErrorPage from "@/components/ErrorPage";
import EditUserNamePage from "@/components/EditUserNamePage";
import ChangePasswrdPage from "@/components/ChangePasswrdPage";
import AdminPage from "@/components/AdminPage";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpPage,
    },
    {
      path: "/verify",
      name: "verify",
      component: VerifyPage,
    },
    {
      path: "/userinfo",
      name: "userinfo",
      component: UserInfoPage,
    },
    {
      path: "/error",
      name: "error",
      component: ErrorPage,
    },
    {
      path: "/edit",
      name: "edit",
      component: EditUserNamePage,
    },
    {
      path: "/change",
      name: "change",
      component: ChangePasswrdPage,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminPage,
    }
  ],
});

export default router;
