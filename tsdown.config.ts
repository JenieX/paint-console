import { defineConfig } from 'tsdown';
import '@jeniex/inspect';

const config = defineConfig({
  entry: ['src/index.ts'],

  tsconfig: 'tsconfig.app.json',
  dts: true,

  // devtools: true,

  outExtensions({ format }) {
    if (format === 'es') {
      return {
        js: '.js',
        dts: '.d.ts',
      };
    }
  },

  deps: {
    neverBundle: true,
  },

  format: ['cjs', 'esm'],
});

export default config;
