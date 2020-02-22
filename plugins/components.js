import path from 'path'
import Vue from 'vue'

const components = require.context('~/components/atoms', true, /\.(vue|js)$/)

function camelCase(...args) {
  return args
    .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1))
    .join('')
}

components.keys().forEach((fileName) => {
  const extName = path.extname(fileName)
  const dirName = path
    .dirname(fileName)
    .split('/')
    .filter((part, index) => part !== '.')
  const baseName = path.basename(fileName, extName)

  const componentName = camelCase(...dirName, baseName)
  const componentObj = components(fileName)

  Vue.component(componentName, componentObj.default || componentObj)
})
