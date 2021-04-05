import { createRouter, createWebHistory } from "vue-router"

function isLoggedIn() {
  const idToken = localStorage.getItem('user-token') || ''
  return !!idToken
}

const Authenticated = (to, from, next) => {
  if (isLoggedIn()) {
    next()
  }
  next('/auth')
}

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/Main.vue"),
    redirect: '/games',
    children: [
      {
        name: 'single-game',
        path: '/games/:id',
        props: true,
        components: {
          default: import("@/components/Games/Game")
        }
      },
      {
        name: 'games',
        path: '/games',
        components: {
          default: () => import("@/components/Games/AllGame"),
          lastGames: () => import("@/components/Games/LastGame")
        },
        props: true,
      },
      {
        name: 'momorygame',
        path: '/games/momorygame',
        components: {
          default: () => import("@/components/Games/MemoryCardGame"),
        },
      },
      {
        name: 'twenty-one',
        path: '/games/twenty-one',
        props: true,
        components: {
          default: () => import("@/components/Games/TwentyOne"),
        },
      },
      {
        name: 'top',
        path: '/top',
        component: () => import("@/components/TopUsers")
      },
      {
        path: '/account/:id',
        name: 'Account',
        component: () => import("@/components/Account"),
        beforeEnter: Authenticated
      }
    ]
  },
  {
    path: "/auth",
    name: "Auth",
    props: true,
    component: () => import("@/views/Auth"),
  },
  {
    name: 'admin',
    path: '/admin',
    component: () => import("@/views/Admin"),
    beforeEnter: Authenticated,
    children: [
      {
        name: 'admin-menu',
        path: '/admin/menu',
        components: {
          default: () => import("@/components/Admin/Menu/Menu"),
          adminMenuForm: () => import("@/components/Admin/Menu/Form")
        } 
      },
      {
        name: 'admin-game',
        path: '/admin/game',
        components: {
          default: () => import("@/components/Admin/Game/Games")
        }
      }
    ],
  },
  { 
    path: '/404', 
    name: '404', 
    component: () => import("@/views/Errors/404"), 
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("@/views/Errors/404"), 
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
