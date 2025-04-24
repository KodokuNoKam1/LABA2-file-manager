import fs from 'fs';
import crypto from 'crypto';
import readline from 'readline';
import path from 'path';

// Чтение содержимого файла
export function cat(filePath) {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  rl.on('line', (line) => {
    console.log(line);
  });

  rl.on('close', () => {
    console.log(`End of file ${filePath}`);
  });

  rl.on('error', (err) => {
    console.log(`Error reading file: ${err.message}`);
  });
}

// Создание пустого файла
export function add(fileName) {
  fs.writeFile(fileName, '', (err) => {
    if (err) {
      console.log(`Error creating file: ${err.message}`);
    } else {
      console.log(`File created: ${fileName}`);
    }
  });
}

// Переименование файла
export function rn(oldName, newName) {
  fs.rename(oldName, newName, (err) => {
    if (err) {
      console.log(`Error renaming file: ${err.message}`);
    } else {
      console.log(`Renamed ${oldName} to ${newName}`);
    }
  });
}

// Копирование файла
export function cp(source, destination) {
  const readStream = fs.createReadStream(source);
  const writeStream = fs.createWriteStream(destination);

  readStream.pipe(writeStream);

  writeStream.on('finish', () => {
    console.log(`File copied from ${source} to ${destination}`);
  });

  readStream.on('error', (err) => {
    console.log(`Error copying file: ${err.message}`);
  });
}

// Перемещение файла
export function mv(source, destination) {
  cp(source, destination);  // Копирование
  fs.unlink(source, (err) => { // Удаление исходного файла
    if (err) {
      console.log(`Error deleting file: ${err.message}`);
    } else {
      console.log(`File moved from ${source} to ${destination}`);
    }
  });
}

// Удаление файла
export function rm(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log(`Error deleting file: ${err.message}`);
    } else {
      console.log(`File deleted: ${filePath}`);
    }
  });
}

// Хеширование файла
export function hash(filePath) {
  const hash = crypto.createHash('sha256');
  const stream = fs.createReadStream(filePath);

  stream.on('data', (data) => {
    hash.update(data);
  });

  stream.on('end', () => {
    console.log(`File hash: ${hash.digest('hex')}`);
  });

  stream.on('error', (err) => {
    console.log(`Error hashing file: ${err.message}`);
  });
}
