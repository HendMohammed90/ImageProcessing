import express, { Request, Response } from "express";
import sharpImage from "../utilities/sarpFunctionality";
import path from "path";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
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

  // console.log(filename);

  //Validate Our Query Parameters
  if (
    typeof parameter.filename !== "string" ||
    typeof parameter.fileName == undefined
  ) {
    throw new Error(`Invalid image name for ${parameter.filename}`);
    
  }
  if (parameter.width <= 0 || typeof parameter.width !== "number") {
    throw new Error(`Invalid width value for ${parameter.width}`);
  }
  if (parameter.height <= 0 || typeof parameter.height !== "number") {
    throw new Error(`Invalid height value for ${parameter.height}`);
  }

  // Use Of Sharp package
  //Calling Sharp Method
  const resizedImage = await sharpImage(
    parameter.filename,
    parameter.width,
    parameter.height
  );
  // console.log(resizedImage);
  // console.log(path.resolve(__dirname, `../public/resizedImage/${resizedImage}`));

  res.sendFile(
    path.resolve(__dirname, `../../public/resizedImage/${resizedImage}`)
  );
});

export default router;
