import { createWebHistory, createRouter } from "vue-router";
import ContactBook from '@/views/ContactBook.vue';

const routes = [
    {
        path: "/",
        name: "ContactBook",
        component: ContactBook,
    },
    {
        path: "/:pathMath(.*)*",
        name: "NotFound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/contacts/:id",
        name: "EditContact",
        component: () => import("@/views/ContactEdit.vue"),
        props: true,
    },
    {
        path: "/contacts/",
        name: "AddContact",
        component: () => import("@/views/ContactAdd.vue"),
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;