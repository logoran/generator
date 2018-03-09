const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'Koa string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'Koa json'
  }
})

module.exports = router
