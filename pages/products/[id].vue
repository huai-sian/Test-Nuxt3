<template>
  <div>
    <Head>
      <Title>Nuxt | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    
    <ProductDetails :product="product" v-if="product" />
  </div>
</template>

<script setup>
  const { productsApi } = useApi();
  const { id } = useRoute().params;
  const router = useRouter();
  const product = useState('product', () => {});

  product.value = await productsApi.getProduct(id);

  if (!product.value) {
   router.push('/products')
  }

  definePageMeta({
    layout: "products",
  })
</script>