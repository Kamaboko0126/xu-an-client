import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/components/LoginPage";
import HomePage from "@/components/HomePage";
import SignUpPage from "@/components/SignUpPage";

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
    },{
        path:"/signup",
        name:"signup",
        component:SignUpPage,
    }
  ],
});

export default router;
