// import { Server } from "http"

// import app from "./app"
// const PORT = 5000

// let server:Server;

// async function bootstrap(){
//     server =  app.listen(PORT, () => {
//         console.log(`Example app listening on port ${PORT}`)
//       })
// }

// bootstrap();
const mongoose = require('mongoose');

async function main() {
    await mongoose.connect(process.env.DATABASE_URL);
  
    
  }