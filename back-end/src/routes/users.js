const { Router } = require('express');
const router = Router();

const {
	getUser,
	getUsers,
	createUser,
	deleteUser,
	updateUser,
} = require('../controllers/users.controllers');

router
	.route('/')
	.get(getUsers)
	.post(createUser);

router
	.route('/:username')
	.get(getUser)
	.put(updateUser)
	.delete(deleteUser);

module.exports = router;
