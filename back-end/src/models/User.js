const { Schema, model } = require('mongoose');

const userSchema = new Schema(
	{
		username: {
			type: String,
			require: true,
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			require: true,
		},
		rol: {
			type: Number,
			require: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = model('user', userSchema);
