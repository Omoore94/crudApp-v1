//setting up mongoose
const mongoose = require('mongoose');


module.exports = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('database connection successfully established')
        }
    });
}
