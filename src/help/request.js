import axios from 'axios'


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = ' https://easy-mock.com/mock/5bf6a26492b5d9334494e891/example'
axios.defaults.withCredentials = true

export default function request (url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type
    }
    if (type.toLowerCase() === 'get') {
      option.params = data
    } else {
      option.data = data
    }
    axios(option).then(res => {
      if (res.data.status === 'ok') {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }).catch(err => {
      reject({msg: '网络异常'})
    })
  })
}
