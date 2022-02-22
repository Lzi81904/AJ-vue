import { TOKEN_TIME, TOKEN_TIME_VALUE } from './constant'
// //登陆时设置时间
export const setTokenTime = () => {
  localStorage.setItem(TOKEN_TIME, Date.now())
}
// //获取时间
export const getTokenTime = () => {
  return localStorage.getItem(TOKEN_TIME)
}

// //比较是否已经过期
export const diffTokenTime = () => {
  const currenTime = Date.now()
  const tokenTime = getTokenTime()
  return currenTime - tokenTime > TOKEN_TIME_VALUE
}
