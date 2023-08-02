//import { IsSSR } from '@/util/envUtil.js'

var IsSSR = typeof window === 'undefined'


//10d , 10min, 10h, 10s,1y
export function setLocalStorage(key,value,expiredtime) {
    let maxAge = getMaxAge(expiredtime) * 1000 //ms

    let item = {
        value: value,
        time: new Date().getTime(),
        maxAge: maxAge
    }

    localStorage.setItem(key,JSON.stringify(item))

}

export function getLocalStorage(key) {
    const itemStr = localStorage.getItem(key)

    if (!itemStr) {
        return null
    }
    let item = JSON.parse(itemStr)

    const now = new Date().getTime()

    if ((now - item.time) > item.maxAge) {
        localStorage.removeItem(key)
        return null
    }

    return item.value

}


const localStorageMixin = {
    created:{

    },

    methods: {

        setLocalStorage(key,value,expiredTime) {
            setLocalStorage(key,value,expiredTime)
        },
        getLocalStorage(key) {
            return getLocalStorage(key)
        }

    }
}
  
//   const clientCookie = { 
//     created () {
//         console.log('client')
//     }
//   }

  

function getMaxAge (expireTimes)
{
  
    let _expires = "";
    if (expireTimes == undefined) {
      expireTimes = "1y"
    }
    if (expireTimes && expireTimes != 0) {
      switch (expireTimes.constructor) {
        case Number:
          if (expireTimes === Infinity || expireTimes === -1)
            _expires = 1000*31104000;//1000year//"; expires=Fri, 31 Dec 9999 23:59:59 GMT";
          else _expires = expireTimes;//"; max-age=" + expireTimes;
          break;
        case String:
          if (/^(?:\d+(y|m|d|h|min|s))$/i.test(expireTimes)) {
            // get capture number group
            const _expireTime = (expireTimes).replace(
              /^(\d+)(?:y|m|d|h|min|s)$/i,
              "$1"
            );
            // get capture type group , to lower case
            switch (
              (expireTimes)
                .replace(/^(?:\d+)(y|m|d|h|min|s)$/i, "$1")
                .toLowerCase()
            ) {
              // Frequency sorting
              case "m":
                _expires = _expireTime * 2592000;//"; max-age=" + +_expireTime * 2592000;
                break; // 60 * 60 * 24 * 30
              case "d":
                _expires = _expireTime * 86400;//"; max-age=" + +_expireTime * 86400;
                break; // 60 * 60 * 24
              case "h":
                _expires = _expireTime * 3600;//"; max-age=" + +_expireTime * 3600;
                break; // 60 * 60
              case "min":
                _expires = _expireTime * 60;//"; max-age=" + +_expireTime * 60;
                break; // 60
              case "s":
                _expires = _expireTime;//"; max-age=" + _expireTime;
                break;
              case "y":
                _expires = _expireTime * 31104000;//"; max-age=" + +_expireTime * 31104000;
                break; // 60 * 60 * 24 * 30 * 12
              default:
                new Error('unknown exception of "set operation"');
            }
          } else {
            _expires = "; expires=" + expireTimes;
          }
          break;

      }
    }

    return _expires;
}

  
export default localStorageMixin //IsSSR() ? serverCookie : clientCookie