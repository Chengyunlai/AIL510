const store = is_Login()
const {token} = storeToRefs(store)

export default defineNuxtRouteMiddleware((to, from) => {
    if (token.value === '' || token.value == null) {
        return navigateTo('/login')
    }
})
