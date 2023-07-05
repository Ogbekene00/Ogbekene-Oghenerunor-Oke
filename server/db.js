// impport the module
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

// create funct using the asyn and await try and catch
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}
// export db connection
module.exports = connectDB;