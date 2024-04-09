import Getpdf from './getpdf.js';
import Extractor from './extractor/extractor.js';

Getpdf.run()
  .then(() => {
    Extractor.read()
      .then(() => {
        console.log('Created rates succesfully');
        process.exit(0);
      })
      .catch((error) => {
        throw new Error('Failed to create rates: ' + error.message);
      });
  })
  .catch((error) => {
    throw new Error('Failed to get pdf: ' + error.message);
  });
