const { Schema, model } = require('mongoose');

const grocerySchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            unique: true,
            required: true
        },
        capacity: {
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

module.exports = model('grocery', grocerySchema);