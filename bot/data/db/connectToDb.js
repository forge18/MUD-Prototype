require('dotenv').config();
const mongoose = require('mongoose');

module.exports = async function()
{
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then((m) => {
        console.log("Connected to DB");
    })
    .catch((err) => console.log(err));
}