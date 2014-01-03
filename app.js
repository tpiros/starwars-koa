var koa = require('koa')
, route = require('koa-route')
, app = module.exports = koa()
, monk = require('monk')
, wrap = require('co-monk')
, db = monk('localhost/starwars')
, books = wrap(db.get('books'));

app.use(route.get('/book', list));
app.use(route.get('/book/:title', show));

function *list() {
  var res = yield books.find({});
  this.body = res;
}

function *show(title) {
  title = decodeURI(title);
  var res = yield books.find({title: title});
  this.body = res;
}
/*app.get('/book/:title', function(req, res) {
  title = decodeURI(req.params.title);
  book.find({title: title}, function(error, book) {
    res.send(book);
  });
});*/

if (!module.parent) app.listen(3000);