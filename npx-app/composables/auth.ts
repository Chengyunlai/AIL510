export const is_Login = defineStore("user", {
    state: () => ({
        token: null
    }),
    persist: true
});
