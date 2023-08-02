import Http from '@/composables/useHttp'


export default class {
  static getProducts() {
    return Http.send('/products', {
      method: "get"
    }, (response) => {
      let data = response;
      data.forEach(element => {
        element.tag = 'product';
      });
      return data;
    })
  }

  static getProduct(params) {
    return Http.send(`/products/${params}`, {
      method: "get"
    })
  }

  static getaProduct() {
    return Http.send(`/product/1`, {
      method: "get"
    })
  }

}