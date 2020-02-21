const { Router } = require('express');
const router = Router();

const {
	getArticle,
	getArticles,
	createArticle,
	deleteArticle,
	updateArticle,
} = require('../controllers/articles.controllers');

router
	.route('/')
	.get(getArticles)
	.post(createArticle);

router
	.route('/:name')
	.get(getArticle)
	.put(updateArticle)
	.delete(deleteArticle);

module.exports = router;