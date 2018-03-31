const Logoran = require('logoran');
const router = require('logoran-router')();
const views = require('koa-views');
const body = require('koa-body')();
const logger = require('logoran-logger');
const serve = require('koa-static');

const app = new Logoran();
const index = require('./routes/index');
const users = require('./routes/users');
const config = require('config');
require('dotenv').config();

// middlewares
app.use(body);
app.use(logger());
app.use(serve(__dirname + '/public'));

app.use(views(__dirname + '/views', {
  extension: '{views}'
}));

router.use('/', index.routes(), index.allowedMethods());
router.use('/users', users.routes(), users.allowedMethods());

app.use(router.routes(), router.allowedMethods());
// response

app.on('error', function(err, ctx){
  console.log(err);
});

const port = process.env.port || config.get('main.server.port') || '3000';
app.listen(port);

module.exports = app;
