// COMP3123 Lab Test 1 | Kamran Omar | 101564373
// Question 3B: Create the Logs directory and ten log files.
const fs = require('node:fs');
const path = require('node:path');
const logsPath = path.join(__dirname, 'Logs');

fs.mkdirSync(logsPath, { recursive: true });
process.chdir(logsPath);
console.log('Current working directory:', process.cwd());

for (let index = 1; index <= 10; index++) {
  const fileName = `log${index}.txt`;
  fs.writeFileSync(fileName, `Kamran Omar (101564373) - log entry ${index}\n`);
  console.log(`Created: ${fileName}`);
}
