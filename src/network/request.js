import axios from "axios"

export function request(config){
    const instance = axios.create({
      baseURL:"http://123.207.32.32:8000",
      timeout:3000
    })
    //请求拦截
    instance.interceptors.request.use(config => {
      // console.log(config)
      return config
    }, err => {
      // console.log(err)
    })
    //响应拦截
    instance.interceptors.response.use(res => {
      // console.log(res)
      return res.data
    }, err => {
      // console.log(err)
    })

    return instance(config)

}



//封装axios的模块
// export function request(config){
//   return new Promise( (resolve,reject) => {
//     const instance = axios.create({
//       baseURL:"http://123.207.32.32:8000",
//       timeout:3000
//     })
//     instance(config)
//     .then(res => {
//       resolve(res)
//     })
//     .catch(err => {
//       reject(err)
//     })
//   })
// }


// export function request(config,success,failure){
//   const instance = axios.create({
//     baseURL:"http://123.207.32.32:8000",
//     timeout:3000
//   })
//   instance(config).then(res => {
//     success(res)
//   }).catch(err => {
//     failure()
//   })
// }
