const mongoose = require('mongoose');

exports.mongoconnection =async () => {

    try {
        await mongoose.connect(process.env.MONGOURL);
        console.log("connection ho gya mongoose se");
    } catch (error) {
        console.log(error.message);
    }
}