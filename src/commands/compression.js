import fs from 'fs';
import zlib from 'zlib';

// Сжимаем файл с использованием Brotli
export function compress(inputPath, outputPath) {
  const input = fs.createReadStream(inputPath);
  const output = fs.createWriteStream(outputPath);
  const brotli = zlib.createBrotliCompress();

  input.pipe(brotli).pipe(output);

  output.on('finish', () => {
    console.log(`File compressed: ${inputPath} -> ${outputPath}`);
  });
}

// Распаковываем файл с использованием Brotli
export function decompress(inputPath, outputPath) {
  const input = fs.createReadStream(inputPath);
  const output = fs.createWriteStream(outputPath);
  const brotli = zlib.createBrotliDecompress();

  input.pipe(brotli).pipe(output);

  output.on('finish', () => {
    console.log(`File decompressed: ${inputPath} -> ${outputPath}`);
  });
}
