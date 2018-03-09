const router = require('logoran-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Logoran!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'Logoran string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'Logoran json'
  }
})

module.exports = router
