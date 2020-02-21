const { Schema, model } = require('mongoose');

const articleSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            unique: true,
            required: true
        },
        description: {
            type: String,
            trim: true
        },
        price: {
			trim: true,
            type: Number,
            required: true
        },
        amount: {
            type: Number,
            trim: true,
            required: true
        },
        address: {
            type: String,
            trim: true,
            required: true
        }
    },
    {
		timestamps: true,
	}
)

module.exports = model('article', articleSchema);
