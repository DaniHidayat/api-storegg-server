var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var session = require('express-session')
var flash = require('connect-flash')
var cors = require('cors')
var dashboardRouter = require('./app/dashboard/router');
var categoryRouter = require('./app/category/router');
var nominalRouter = require('./app/nominal/router');
var voucherRouter = require('./app/voucher/router');
var bankRouter = require('./app/bank/router');
var paymentRouter = require('./app/payment/router');
var usersRouter = require('./app/users/router');
var transactionRouter = require('./app/transaction/router');
var plyaerRouter = require('./app/player/router');
var authRouter = require('./app/auth/router');
var vocaRouter = require('./app/voca/router');
var midtransRouter = require('./app/midtrans/router');
var noteRouter = require('./app/note/router');
var midtransRouter = require('./app/midtrans/router');
var app = express();
const URL = '/api/v1'
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'))
app.use(session({
  secret: 'Keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie:{}
}))
app.use(flash());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/adminlte', express.static(path.join(__dirname, '/node_modules/admin-lte/')));
app.use('/image', express.static(path.join(__dirname, '/public/uploads/')));
app.use('/', usersRouter);
app.use('/dashboard', dashboardRouter);
app.use('/category', categoryRouter);
app.use('/nominal', nominalRouter);
app.use('/voucher', voucherRouter);
app.use('/bank', bankRouter);
app.use('/payment', paymentRouter);
app.use('/transaction', transactionRouter);
app.use('/transaction', transactionRouter);
app.use('/voca', vocaRouter); 





//API

app.use(`${URL}/players`, plyaerRouter);
app.use(`${URL}/notes`, noteRouter); 
app.use(`${URL}/auth`, authRouter);
app.use(`${URL}/midtrans`, midtransRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
