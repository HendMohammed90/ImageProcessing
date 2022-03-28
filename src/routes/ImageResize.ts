import express, { Request, Response, NextFunction } from "express";
import sharpImage from "../utilities/sarpFunctionality";
import path from "path";

const router = express.Router();

void router.use(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    //Get Our Query Parameters
    const filename = req.query.filename as string;
    const width = req.query.width as unknown as number;
    const height = req.query.height as unknown as number;

    console.log('filename = ', filename);
    console.log('width = ', width);
    console.log('height = ', height);

    

    //Validate Our Query Parameters
    if (typeof filename !== "string" || filename === undefined) {
      res.send(`Invalid image Name for ${filename}`);
    } else {
      next();
    }

    if (height <= 0 || height === undefined || isNaN(height)) {
      res.send(`Invalid height value for ${height}`);
    } else {
      next();
    }
    
    if (width <= 0 || width === undefined || isNaN(width)) {
      res.send(`Invalid width value for ${width}`);
    } else {
      next();
    }

  }
);

void router.get("/", async (req: Request, res: Response) => {
  //Set Our Headers
  res.setHeader("Content-Type", "image/jpeg");
  res.setHeader("Content-Disposition", "inline;filename=yolo.jpeg");

  //Get Our Query Parameters
  const filename = req.query.filename as string;
  const width = req.query.width as unknown as number;
  const height = req.query.height as unknown as number;
  const parameter = await JSON.parse(
    `{"filename":"${filename}", "width":${width}, "height":${height}}`
  );

  // Use Of Sharp package
  //Calling Sharp Method
  const resizedImage = await sharpImage(
    parameter.filename,
    parameter.width,
    parameter.height
  );

  res.sendFile(
    path.resolve(__dirname, `../../public/resizedImage/${resizedImage}`)
  );
});

export default router;
