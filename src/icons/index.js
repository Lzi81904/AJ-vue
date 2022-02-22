import SvgIcon from '@/components/SvgIcon'

// //导入svg目录，false：不查询子目录 ，匹配后缀为.svg文件
const svgRequired = require.context('./svg', false, /\.svg$/)
svgRequired.keys().forEach((item) => svgRequired(item))

export default (app) => {
  //   //定义一个全局组件
  app.component('svg-icon', SvgIcon)
}
