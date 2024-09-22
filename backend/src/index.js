require('dotenv').config();

const app = require('./app.js')
const { connectDatabase } = require('./db/db.js')

//connect to db
connectDatabase().then(() => {
    app.listen(process.env.PORT, ()=>{
        console.log("Server is listening!!")
    });
})

// app.listen(3001, ()=>{
//     console.log("Started")
// })