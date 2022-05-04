const express = require("express");
const router = express.Router()
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../models/user')

passport.use(new LocalStrategy(
	function(username, password, done) {
		User.findOne({ username: username }, (err, user) => {
			if (err) { return done(err); }
			if (!user) { return done(null, false); }
			if (user.password !== password) { return done(null, false); }
			return done(null, user);
		});
	}
));

passport.serializeUser(function(user, cb) {
	process.nextTick(function() {
	  cb(null, { id: user.id, username: user.username });
	});
});
  
passport.deserializeUser(function(user, cb) {
	process.nextTick(function() {
		return cb(null, user);
	});
});

router.get('/login', (req, res) => {
	res.render('user/login', {
		title: 'Авторизация'
	})
})

router.post('/login', 
	passport.authenticate('local', { failureRedirect: './login' }),
	function(req, res) {
		const {username} = req.body
		res.redirect('./me' + username);
	}
);


router.get('/signup', (req, res) => {
	res.render('user/signup', {
		title: 'Регистрация'
	})
})

router.post('/signup', async (req, res) => {
	const {username, password} = req.body

	const newUser = new User({
		username, password
	})

	try {
        await newUser.save();
        res.redirect('./login')
    } catch (e) {
        console.error(e);
    }
})

router.get('/me:username', (req, res) => {
	const {username} = req.params
	res.render('user/me', {
		title: 'Профиль',
		username: username,
	})
})

module.exports = router;
