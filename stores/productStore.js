import { defineStore } from 'pinia'
const { productsApi } = useApi();

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: 0
  }),
  actions: {
    async getProduct(params) {
      this.products = await productsApi.getProducts();
      console.log(this.products);
    }
  }
})