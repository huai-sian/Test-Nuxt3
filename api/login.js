import Http from '@/composables/useHttp'


export default class {
  static login(data) {
    return Http.send('/auth/login', {
      method: "post",
      body: data
    })
  }

}