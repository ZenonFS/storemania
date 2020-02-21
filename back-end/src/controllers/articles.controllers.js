const Article = require('../models/Article');

const articlesCtrl = {};

// Params: /
articlesCtrl.getArticles = async (req, res) => {
    const articles = await Article.find();
    res.json(articles)
}
articlesCtrl.createArticle = async (req, res) => {
    const { name, description, price, amount, address } = req.body;
	const newArticle = new Article({
        name, 
        description, 
        price,
        amount, 
        address
	});
	await newArticle.save();
	res.json({ message: 'Article Created' });
}

// Params: /:name
articlesCtrl.getArticle = async (req, res) => {
    const nombre = await req.params.name
    const article = await Article.find({name: nombre});
    res.json(article)
}

articlesCtrl.updateArticle = async (req, res) => {
    const nombre = await req.params.name;
	await Article.findOneAndUpdate({ name: nombre }, req.body);

	res.json({ message: 'Article Update' });
}
articlesCtrl.deleteArticle = async (req, res) => {
    const nombre = await req.params.name;
	await Article.findOneAndDelete({ name: nombre }, req.body);

	res.json({ message: 'Article Delete' });
}

module.exports = articlesCtrl;
