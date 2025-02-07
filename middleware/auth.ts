// export default defineNuxtRouteMiddleware((to, from) => {
//   const isLoggedIn = false;

//   if (!isLoggedIn && to.path !== "/login") {
//     return navigateTo("/login");
//   }

//   if (isLoggedIn && to.path === "/login") {
//     return navigateTo("/dashboard");
//   }
// });
