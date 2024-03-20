import Extractor from './extractor/extractor.js';

Extractor.success()
  .then(() => {
    console.log('Created rates succesfully');
    process.exit(0);
  })
  .catch((error) => {
    throw new Error('Failed to create rates: ' + error.message);
  });
