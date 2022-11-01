import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Location from "../views/Location.vue";
import Careers from "../views/Careers.vue";
import Test from "../views/Test.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/location",
    name: "Location",
    component: Location,
  },
  {
    path: "/careers",
    name: "Careers",
    component: Careers,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
