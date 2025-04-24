import fs from 'fs';
import path from 'path';

// Переход на одну папку вверх
export function up() {
  const currentDir = process.cwd();
  const parentDir = path.dirname(currentDir);
  process.chdir(parentDir);
  console.log(`Changed directory to ${parentDir}`);
}

// Переход в указанную директорию
export function cd(dir) {
  try {
    process.chdir(dir);
    console.log(`Changed directory to ${dir}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}

// Вывод списка файлов и папок в текущем каталоге
export function ls() {
  const currentDir = process.cwd();
  fs.readdir(currentDir, (err, files) => {
    if (err) {
      console.log(`Error reading directory: ${err.message}`);
      return;
    }

    const sortedFiles = files.sort((a, b) => a.localeCompare(b));

    sortedFiles.forEach(file => {
      const isDir = fs.lstatSync(file).isDirectory() ? 'directory' : 'file';
      console.log(`${file} ${isDir}`);
    });
  });
}
