import { defineStore } from 'pinia'

function storeSetup() {
  const userInfo = ref()
  const getUserInfo = computed(() => userInfo.value)
  const isLogin = computed(() => !!userInfo.value?.remember_token)
  const getToken = computed(() => userInfo.value?.remember_token)
  const setUserInfo = (info) => {
    userInfo.value = info
  }
  const login = async (params) => {
    const { loginApi } = useApi()
    console.log(params);
    const jsonParams = JSON.stringify(params);
    console.log(jsonParams);
    try {
      const data = await loginApi.login(jsonParams)
      console.log(data);
      userInfo.value = data.token
      return data
    } catch (err) {
      console.log(err);
    }
    
  }
  const clearUserInfo = () => {
    userInfo.value = undefined
  }
  const logout = async () => {
    const { loginApi } = useApi()
    await login.logout()
    clearUserInfo()
  }

  const count = ref(1)
  const getCount = computed(() => count.value)
  const addCount = () => {
    count.value++
  }

  return { userInfo, login, logout, getUserInfo, getToken, isLogin, clearUserInfo, count, getCount, addCount, setUserInfo }
}
export const useUserStore = defineStore('app-user', storeSetup, { persist: true })