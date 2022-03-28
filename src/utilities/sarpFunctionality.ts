import path from "path";
import sharp from "sharp";
import fs from "fs";

const sharpImage = async (
  name: string,
  width: number,
  height: number
): Promise<string | undefined> => {
  try {
    //Check for the image first found on our folder  or not
    if (
      fs.existsSync(
        path.resolve(
          __dirname,
          `../../public/resizedImage/${name}-${width}-${height}.jpg `
        )
      )
    ) {
      const fileName = `${name}-${width}-${height}.jpg `;
      // console.log("file  exists:", fileName);
      return fileName;
    } else {
      await sharp(path.resolve(__dirname, `../../public/images/${name}.jpg`))
        .resize({
          width: width,
          height: height,
        })
        .toFile(
          path.resolve(
            __dirname,
            `../../public/resizedImage/${name}-${width}-${height}.jpg`
          )
        );

      const fileName = `${name}-${width}-${height}.jpg `;
      return fileName;
    }
  } catch (error) {
    console.log(error);
  }
};

export default sharpImage;
