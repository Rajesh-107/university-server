// import { Server } from "http"

import app from './app';
import config from './config';
import mongoose from 'mongoose';
import { Server } from 'http';
let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    server = app.listen(config.port, () => {
      console.log(`kaj app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();

process.on('unhandledRejection', () => {
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  process.exit(1);
});

// const PORT = 5000

// let server:Server;

// async function bootstrap(){
//     server =  app.listen(PORT, () => {
//         console.log(`Example app listening on port ${PORT}`)
//       })
// }

// bootstrap();
