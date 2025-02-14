export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = true;

  if (!isLoggedIn && to.path !== "/login") {
    return navigateTo("/login");
  }

  if (isLoggedIn && to.path === "/login") {
    return navigateTo("/dashboard");
  }
});
