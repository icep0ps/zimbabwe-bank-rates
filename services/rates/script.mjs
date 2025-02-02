import fs from "fs";
import Getpdf from "./getpdf.mjs";
import Extractor from "./extractor.mjs";
import path from "path";

Getpdf.run()
  .then(() => {
    Extractor.read()
      .then(() => {
        console.log("Created rates succesfully");
        fs.unlink(
          path.join(PROJECT_ROOT_DIR, "services/rates/rates.pdf"),
          function (err) {
            process.exit(0);
          },
        );
      })
      .catch((error) => {
        throw new Error("Failed to create rates: " + error.message);
      });
  })
  .catch((error) => {
    throw new Error("Failed to get pdf: " + error.message);
  });
