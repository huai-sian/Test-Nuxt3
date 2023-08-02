import { hash } from "ohash";

const timeout = 30000;

const fetch = async (url, headers, localhandler)  => {
  try {
    const { public: { apiBase } } = useRuntimeConfig();
    const reqUrl = apiBase + url;
    const key = hash(url);

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const { data, error, status } = await useFetch(reqUrl, { ...headers, key, signal: controller.signal });
    clearTimeout(id);
    
    const result = data.value;
    console.log(error);
    console.log(result);
    console.log(status);
    if (error.value || (result && status.value !== "success")) {

      if(error.value && error.value.statusCode) {
        httpErrorStatusHandle(error.value.statusCode);
        return Promise.reject(error.value);
      }

      // if (process.client) {
      //   return Promise.reject(result)
      // } else {
      //   throw createError({
      //     statusCode: 500,
      //     statusMessage: reqUrl,
      //     message: error.value?.message || '伺服器錯誤',
      //   })
      // }
    }
    if (localhandler) {
      return localhandler(result);
    } else {
      return result 
    }

  } catch (err) {
    console.log(err)
    // return Promise.reject(err)
    return Promise.reject(err)
  }
}

function httpErrorStatusHandle(err) {
  let message = '';
  if (err) {
    switch (err) {
      case 400: message = '400 Error'; break;
      case 401: message = '未登入或登入時限已過'; break; //window.location.href = getLoginURL() ; break;
      case 403: message = '403 Forbidden'; break;
      case 404: message = `未能找到資料或所輸入的資料不存在`; break;

      case 500: message = '系統忙碌中，請稍後再試'; break;
      case 502: message = '502 Bad Gateway'; break;
      case 503: message = '503 Service Unavailable'; break;
      case 504: message = '504 Gateway Timeout'; break;
    }
    if (process.client) {
      ElMessage.error(message)
    }
  }

}

export default class Http {

  static send(url, headers, localhandler) {
    return fetch(url, headers, localhandler)
  }

}