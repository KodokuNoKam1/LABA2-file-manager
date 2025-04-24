import { cat, add, rn, cp, mv, rm } from './commands/fileOperations.js';  // Убрали hash
import { getEol, getCpus, getHomeDir, getUsername, getArchitecture } from './commands/systemInfo.js';
import { compress, decompress } from './commands/compression.js';

// Получаем команду и аргументы из командной строки
const command = process.argv[2];
const args = process.argv.slice(3);

// Выводим приветственное сообщение
const username = process.argv.includes('--username') ? process.argv[process.argv.indexOf('--username') + 1] : 'Guest';
console.log(`Welcome to the File Manager, ${username}!`);

// Обработка команд
switch (command) {
  case 'ls':
    ls();
    break;
  case 'cd':
    cd(args[0]);
    break;
  case 'up':
    up();
    break;
  case 'cat':
    cat(args[0]);
    break;
  case 'add':
    add(args[0]);
    break;
  case 'rn':
    rn(args[0], args[1]);
    break;
  case 'cp':
    cp(args[0], args[1]);
    break;
  case 'mv':
    mv(args[0], args[1]);
    break;
  case 'rm':
    rm(args[0]);
    break;
  case 'os':
    if (args[0] === '--EOL') getEol();
    if (args[0] === '--cpus') getCpus();
    if (args[0] === '--homedir') getHomeDir();
    if (args[0] === '--username') getUsername();
    if (args[0] === '--architecture') getArchitecture();
    break;
  case 'compress':
    compress(args[0], args[1]);
    break;
  case 'decompress':
    decompress(args[0], args[1]);
    break;
  default:
    console.log('Invalid command');
}
