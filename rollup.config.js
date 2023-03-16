import { defineConfig } from 'rollup';

// Resolve node_modules dependencies
import resolve from '@rollup/plugin-node-resolve';
// Convert CommonJS to ES2015 before Rollup process
import commonjs from '@rollup/plugin-commonjs';
// Transpile typescript
import typescript from '@rollup/plugin-typescript';
// Build types declaration files .d.ts
import dts from 'rollup-plugin-dts';

// Build css files
import styles from 'rollup-plugin-styles';
import autoprefixer from 'autoprefixer';

// Peer dependencies are not included into the bundle.
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// Minify our bundle and reduce the overall file size.
import { terser } from 'rollup-plugin-terser';

import replace from '@rollup/plugin-replace';

const packageJson = require('./package.json');

const isProduction = process.env.BUILD === 'production';

export default defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: !isProduction
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: !isProduction
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs({ sourceMap: !isProduction }),
      typescript({ sourceMap: !isProduction }),
      styles({
        plugins: [autoprefixer()],
        sourceMap: true,
        extract: true,
        minimize: true,
        modules: true,
        autoModules: true
      }),
      replace({
        exclude: 'node_modules/**',
        preventAssignment: true,
        'process.env.BUILD': JSON.stringify(process.env.BUILD || 'development')
      }),
      terser()
    ],
    external: Object.keys(packageJson.peerDependencies)
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/]
  }
]);
