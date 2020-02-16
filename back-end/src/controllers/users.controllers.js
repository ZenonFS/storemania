const User = require('../models/User');

const usersCtrl = {};

usersCtrl.getUsers = async (req, res) => {
	const users = await User.find();
	res.json(users);
};

usersCtrl.createUser = async (req, res) => {
	const { username, password, rol } = req.body;
	const newUser = new User({
		username,
		password,
		rol,
	});
	await newUser.save();
	res.json({ message: 'User Created' });
};

usersCtrl.getUser = async (req, res) => {
	const _username = await req.params.username;
	const user = await User.find({ username: _username });

	res.json(user);
};

usersCtrl.updateUser = async (req, res) => {
	const _username = await req.params.username;
	await User.findOneAndUpdate({ username: _username }, req.body);

	res.json({ message: 'User Updated' });
};

usersCtrl.deleteUser = async (req, res) => {
	const _username = await req.params.username;
	await User.findOneAndDelete({ username: _username });

	res.json({ message: 'User Deleted' });
};

module.exports = usersCtrl;
