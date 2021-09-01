const mongoose = require("mongoose");
mongoose.Promise = Promise;
mongoose.set("debug", true);
mongoose.connect(process.env.MONGO_ATLAS_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).catch(err => {
    console.error(err.message);
});

const db = mongoose.connection;

module.exports = db;