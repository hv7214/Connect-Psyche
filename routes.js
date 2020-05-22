const routes = module.exports = require('next-routes')()

routes
  .add('index', '/')
  .add('test', '/test/:lang?')
  .add('result', '/result')
  .add('showResult', '/result/:id')
  .add('compare', '/compare')
  .add('showCompare', '/compare/:id', 'showCompare')
