const mongoose = require('mongoose');
//db connecting to mongodb atlas
const DB ='mongodb+srv://jay:qwert@cluster0.xyfk4.mongodb.net/crudap?retryWrites=true&w=majority';

mongoose.connect(DB,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false 
}).then(() => {
    console.log("connection successfull..");
}).catch((error) => {
    console.log(error);
})

////db connecting to mongo
// mongoose.connect("mongodb://localhost:27017/students-api",{
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true 
// }).then(() => {
//     console.log("connection successfull..");
// }).catch((e) => {
//     console.log("No connection");
// })