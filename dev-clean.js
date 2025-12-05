#!/usr/bin/env node
const { spawn } = require('child_process');

// Spawn the Next.js dev server
const child = spawn('npx', ['next', 'dev'], {
  stdio: ['inherit', 'pipe', 'pipe'],
  shell: true
});

// Filter stdout
child.stdout.on('data', (data) => {
  const output = data.toString();
  // Filter out baseline-browser-mapping warnings
  if (!output.includes('baseline-browser-mapping')) {
    process.stdout.write(output);
  }
});

// Filter stderr
child.stderr.on('data', (data) => {
  const output = data.toString();
  // Filter out baseline-browser-mapping warnings
  if (!output.includes('baseline-browser-mapping')) {
    process.stderr.write(output);
  }
});

// Handle exit
child.on('exit', (code) => {
  process.exit(code);
});

// Handle Ctrl+C
process.on('SIGINT', () => {
  child.kill('SIGINT');
});



