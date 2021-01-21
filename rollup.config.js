import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.min.js',
            format: 'iife',
            name: 'version',
            plugins: [terser()],
        },
    ],
    plugins: [resolve(), babel({ babelHelpers: 'bundled' })],
};
