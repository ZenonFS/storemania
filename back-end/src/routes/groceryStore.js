const { Router } = require('express');
const router = Router();

const {
	getGrocery,
	getGrocerys,
	createGrocery,
	deleteGrocery,
	updateGrocery,
} = require('../controllers/groceryStore.controllers');

router
	.route('/')
	.get(getGrocerys)
	.post(createGrocery);

router
	.route('/:name')
	.get(getGrocery)
	.put(updateGrocery)
	.delete(deleteGrocery);

module.exports = router;