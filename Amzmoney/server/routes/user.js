const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const validation = require('../constants/validations');

const router = express.Router();
const salt = bcrypt.genSaltSync(16);
const TOKEN_INTERVAL = 1000 * 60 * 5;

router.post('/register', async (req, res) => {

	const { email, password, username } = req.body;


	if (!email) {
		res.status(400).json({ message: 'Email required.'})
	}
	if (!username) {
		res.status(400).json({ message: 'Username required.'})
	}
	if (!password) {
		res.status(400).json({ message: 'Password required.'})
	}

	const passwordHash = await bcrypt.hash(password, salt);

	const newUser = new User({
		email,
		username,
		passwordHash,
	});

	newUser.save()
		.then(saveduser => {
			res.status
		})
})

.post('/login', async (req, res) => {
	const {usernameOrEmail, password } = req.body;
	if(!usernameOrEmail || !password) {
		return res.status(400).json({message: "Username/email and password does not match "})
	}

	let query = {};
	if (validation.isEmail.test(usernameOrEmail)) {
		query.email = usernameOrEmail
	} else {
		query.username = usernameOrEmail
	}

	const foundUser = await User.findOne(query);

	if(!foundUser) {
		return res.status(404).json({message: "Incorrect email/password combination"});
	}
	const passwordIsValid = await bcrypt.compare(password, foundUser.passwordHash);
	if(!passwordIsValid) {
		return res.status(401).json({ message: "Incorrect email/password combination"} );
	}

	const payload = {
		sub: foundUser.username,
		exp: Date.now() + TOKEN_INTERVAL,
	};

	const token = jwt.sign(payload, process.env.SECRET);

	res.status(200).json({ foundUser, token});

});

module.exports = router;