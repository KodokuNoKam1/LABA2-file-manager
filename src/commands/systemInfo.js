import os from 'os';

// Получаем системный End-of-Line
export function getEol() {
  console.log(`System EOL: ${os.EOL}`);
}

// Получаем информацию о процессорах
export function getCpus() {
  const cpus = os.cpus();
  cpus.forEach((cpu, index) => {
    console.log(`CPU ${index + 1}: Model - ${cpu.model}, Speed - ${cpu.speed} MHz`);
  });
}

// Получаем домашний каталог
export function getHomeDir() {
  console.log(`Home directory: ${os.homedir()}`);
}

// Получаем имя пользователя
export function getUsername() {
  console.log(`Username: ${os.userInfo().username}`);
}

// Получаем архитектуру ЦП
export function getArchitecture() {
  console.log(`CPU Architecture: ${os.arch()}`);
}
