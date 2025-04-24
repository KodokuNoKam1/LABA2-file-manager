import fs from 'fs';
import crypto from 'crypto';

// Вычисление хэша для файла (например, SHA-256)
export const hash = (filePath) => {
  const file = fs.createReadStream(filePath);
  const hash = crypto.createHash('sha256');

  file.on('data', (chunk) => {
    hash.update(chunk);
  });

  file.on('end', () => {
    console.log(`File hash: ${hash.digest('hex')}`);
  });

  file.on('error', (err) => {
    console.error(`Error calculating hash: ${err.message}`);
  });
};
