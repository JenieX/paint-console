const { stdout } = process;

const originalConsole = {
  ...console,
};

const DEFAULT = '\x1b[m';
const BLUE = '\x1b[1;36m';
const YELLOW = '\x1b[1;33m';
const RED = '\x1b[1;31m';

console.info = function () {
  const args = Array.prototype.slice.call(arguments);
  stdout.write(BLUE);
  originalConsole.info.apply(this, args);
  stdout.write(DEFAULT);
};

console.warn = function () {
  const args = Array.prototype.slice.call(arguments);
  stdout.write(YELLOW);
  originalConsole.warn.apply(this, args);
  stdout.write(DEFAULT);
};

console.error = function () {
  const args = Array.prototype.slice.call(arguments);
  stdout.write(RED);
  originalConsole.error.apply(this, args);
  stdout.write(DEFAULT);
};

export { originalConsole };
