//ESM - browser 환경에서 사용
// CommonJs - node.js 환경에서 사용

// import autoprefixer from 'autoprefixer'

// export  {
//   plugins: [
//     autoprefixer
//   ]
// }
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}