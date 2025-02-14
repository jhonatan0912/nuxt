import { defineStore } from "pinia";
import type { AuthLogin } from "~/interfaces/auth.interface";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as AuthLogin | null,
    token: useCookie("accessToken"),
  }),
  actions: {
    setUser(userData: AuthLogin) {
      this.user = userData;
    },
  },
});
