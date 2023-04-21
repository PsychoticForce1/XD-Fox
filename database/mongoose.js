const mongoose = require("mongoose");
let pass = "";

module.exports = {
    init: () =>{
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            connectTimeoutMS: 10000,
            family: 4,
        }
        mongoose.connect(`mongodb+srv://MinitureMitch:${pass}@bigmitchdatabase.a8mm4.mongodb.net/MiniMitch?retryWrites=true&w=majority`, dbOptions);
        
        //mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () =>{
            console.log("Connected to Database.");
        });
        mongoose.connection.on('disconnected', () =>{
            console.log("Disconnected from Database.");
        });
        mongoose.connection.on('err', (err) =>{
            console.log("An error occurred: " + error);
        });
    }
}