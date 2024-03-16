import Getpdf from './getpdf.js';
import Extractor from './extractor/extractor.js';

Extractor.success()
  .then(() => {
    console.log('Created rates succesfully');
    process.exit(1);
  })
  .catch((error) => {
    throw new Error('Failed to create rates: ' + error.message);
  });
