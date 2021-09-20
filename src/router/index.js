import Vue from "vue";
import VueRouter from "vue-router";

import Inicio from "../views/Inicio.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/notfound",
    component: NotFound,
  },
  {
    path: "/",
    redirect: "/inicio",
  },
  {
    path: "/inicio",
    name: "Inicio",
    component: Inicio,
    meta: {
      header: true,
      title: "Chevrolet presenta la totalmente nueva Blazer",
      subTitle: "Llega&nbsp;como la primera SUV deportiva de la marca",
      backgroundImg: "/assets/img/chevrolet-blazer.jpg",
    },
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: () => import("../views/Contacto.vue"),
    meta: {
      header: true,
      title: "Contacto",
      subTitle: "",
      backgroundImg: "assets/img/contact-bg.jpg",
    },
  },
  {
    path: "/sobremi",
    name: "SobreMi",
    component: () => import("../views/SobreMi.vue"),
    meta: {
      header: true,
      title: "SobreMi",
      subTitle: "",
      backgroundImg: "assets/img/about-bg.jpg",
    },
  },
  {
    path: "/post",
    name: "Post",
    component: () => import("../views/Post.vue"),
    meta: {
      header: true,
      title: "Post",
      subTitle: "",
      backgroundImg: "assets/img/post-sample-image.jpg",
    },
    children: [
      {
        path: "/:id",
        component: () => import("../views/Articulo.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
