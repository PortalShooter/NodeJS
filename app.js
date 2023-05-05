const express = require('express');
const passport = require('passport');
const YandexStategy = require('passport-yandex').Strategy;

const YANDEX_CLIENT_ID = '2c1c6fceedf64381a3a30ccee1ec8623';
const YANDEX_CLIENT_SECRET = '6aa145cab7704c3d804eaf220ba58bed';

function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(
  new YandexStategy({
    clientID: YANDEX_CLIENT_ID,
    clientSecret: YANDEX_CLIENT_SECRET,
    callbackURL: 'http://127.0.0.1:3000/auth/yandex/callback'
  },
  (accessToken, refrechToken, profile, done) => {
    process.nextTick(() => {
      return done(null, profile);
    })
  }
  )
);

const app = express();
app.use(require('cookie-parser')());
app.use(require('express-session')({
  secret: process.env.COOKIE_SECRET || 'COOKIE_SECRET',
}));

app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.render('index', {user: req.user});
});

app.get('/account', isAuthenticated, (req, res) => {
  res.render('profile', {user: req.user})
});

app.get('/auth/yandex', 
  passport.authenticate('yandex')
);

app.get('/login', function(req, res){
  res.render('login', { user: req.user });
});

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.get('/auth/yandex/callback',
  passport.authenticate('yandex', {failureRedirect: '/login'}),
  (req, res) => {
    res.redirect('/');
  }
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server start http://localhost:${PORT}`)
});