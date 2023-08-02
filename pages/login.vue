<template>
  <div class="custom-container">
    <div>
      <h1>Sign In</h1>
      <el-form>
        <el-form-item label="Username">
          <el-input v-model="username" placeholder="Enter your username"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="password" placeholder="Enter your password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onLoginApi">Login</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user.store'
import { useProductsStore } from '@/stores/productStore'
import _ from 'lodash';

const userStore = useUserStore()
const productsStore = useProductsStore()

const route = useRoute()
const router = useRouter()

const { loginApi } = useApi()

const username = useState('username', () => '');
const password = useState('password', () => '');

definePageMeta({
  title: '登入',
})

getProducts()

async function getProducts() {
  await productsStore.getProduct();
}


async function onLoginApi() {
  const params = { username: username.value, password: password.value }
  try {
    const data = await userStore.login(params)
    if (!data) {
      ElMessage.warning('failed!');
    } else {
      ElMessage.success('success!');
      await router.push('/products')
    }
    
  } catch(err) {
    ElMessage.warning('error!');
    console.log(err);
  }
  
}


</script>

<style lang="scss" scoped>
.custom-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}
</style>