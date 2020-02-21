const Grocery = require('../models/GroceryStore');

const groceryCtrl = {};

// Params: /
groceryCtrl.getGrocerys = async (req, res) => {
    const grocery = await Grocery.find();
    res.json(grocery)
}
groceryCtrl.createGrocery = async (req, res) => {
    const { name, capacity, address } = req.body;
	const newGrocery = new Grocery({
        name, 
        capacity,
        address
	});
	await newGrocery.save();
	res.json({ message: 'Grocery Store Created' });
}

// Params: /:id
groceryCtrl.getGrocery = async (req, res) => {
    const nombre = await req.params.name
    const grocery = await Grocery.find({name: nombre});
    res.json(grocery)
}

groceryCtrl.updateGrocery = async (req, res) => {
    const nombre = await req.params.name;
	await Grocery.findOneAndUpdate({ name: nombre }, req.body);

	res.json({ message: 'Grocery Store Update' });
}
groceryCtrl.deleteGrocery = async (req, res) => {
    const nombre = await req.params.name;
	await Grocery.findOneAndDelete({ name: nombre }, req.body);

	res.json({ message: 'Grocery Store Delete' });
}

module.exports = groceryCtrl;
