export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("accessToken");

  if (process.server) return;

  if (token.value) {
    if (to.path === "/login") {
      return navigateTo("/");
    }
    return;
  }

  if (!token.value && to.path !== "/login") {
    return navigateTo("/login");
  }
});
