import express, { Application } from "express";
// import path from "path";

// create a server
const app: Application = express();

//import our routers
import router from "./routes/ImageResize";

//import Some utilities
import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config();

//Use Some Of Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("tiny"));
}

//define our Port
const port = process.env.PORT || 8080;


//Mount Our Route
void app.use("/api/images", router);

//set The listening
const server =  app.listen(port, () => {
  console.log(
    `App Running in ${process.env.NODE_ENV} mode at localhost:${port} `
  );
});

//Handle Unhandled Promise Rejections
void process.on('unhandledRejection', (error)  => {
  //log some exception
  console.log(`Error: ${error}`);
  //Close Server & Exit Process
  server.close(() => process.exit(1));
})

export default app;
