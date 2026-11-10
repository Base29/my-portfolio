#!/usr/bin/env node
import { spawn } from 'node:child_process';

const args = process.argv.slice(2);
const runArgs = args.length > 0 ? args : ['build'];

console.log(`[run-shim] Forwarding to: npm run ${runArgs.join(' ')}`);

const child = spawn('npm', ['run', ...runArgs], {
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    ASTRO_TELEMETRY_DISABLED: '1'
  }
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
