<template>
  <div>
    <el-row :gutter="10">
      <el-col
        v-for="(p, index) in products"
        :key="p.id"
        :span="8"
        class="mb-3"
      >
        <el-card :body-style="{ padding: '0px' }">
          <ProductCard :product="p" />
        </el-card>
      </el-col>
    </el-row>
    <p>{{ t('add') }}</p>
    <p>{{ config.showCookiePolicy }}</p>
     <!-- <p v-for="p in dataTest" :key="p.price">{{ p.title }}</p> -->
  </div>
</template>

<script setup>
  const { t } = useI18n()
  const { productsApi } = useApi();
  const { public: config } = useRuntimeConfig();

  const route = useRoute();
  const router = useRouter();
  const products = useState('products', () => []);

  definePageMeta({
    layout: "products",
  })
  // productsApi.getProducts().then(res => {
  //   console.log('class',res);
  // }).catch((err)=>{
  //   console.log(err)
  // })

  async function getProduct20() {
    try {
      const data = await productsApi.getProducts();
      products.value = data;
      console.log(data);
    } catch (err) {
      console.log(err)
    }
  }

  getProduct20();

  useHead({
    title: 'Nuxt | Merch',
    meta: [
      { name: 'description', content: 'Nuxt 3 Merch'}
    ]
  })
</script>