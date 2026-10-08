// COMP3123 Lab Test 1 | Kamran Omar | 101564373
// Question 3A: Delete existing log files and the Logs directory.
const fs = require('node:fs');
const path = require('node:path');
const logsPath = path.join(__dirname, 'Logs');

if (!fs.existsSync(logsPath)) {
  console.log('No Logs directory found. Nothing to remove.');
} else {
  for (const entry of fs.readdirSync(logsPath)) {
    const filePath = path.join(logsPath, entry);
    if (fs.statSync(filePath).isFile()) {
      console.log(`Deleting: ${entry}`);
      fs.unlinkSync(filePath);
    }
  }
  fs.rmdirSync(logsPath);
  console.log('Logs directory removed.');
}
