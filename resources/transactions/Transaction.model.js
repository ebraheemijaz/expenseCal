const mongose = require('mongoose')
const TransactionSchema = new mongose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text'],
    },
    amount: {
        type: Number,
        required: [true, 'Plese add a positive or negative number'],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
})
module.exports = mongose.model('Transaction', TransactionSchema)
