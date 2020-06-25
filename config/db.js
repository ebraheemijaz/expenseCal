const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        })
        console.log(`MongnDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error in MongnDB connection: ${error.message}`)
        process.exit(1)
    }
}
module.exports = connectDB