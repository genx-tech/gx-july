import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

export default {
    external: [/lodash/, /core-js\//],    
    input: 'src/index.js',
    output: [
        {
            globals: {
                'lodash': '_',
                'lodash/each': '_each',
                'lodash/isEqual': '_isEqual',
                'lodash/reduce': '_reduce',
                'lodash/isEmpty': '_isEmpty',
                'lodash/differenceWith': '_differenceWith',
                'lodash/get': '_get',
                'lodash/set': '_set',
                'lodash/range': '_range',
                'lodash/template': '_template',
                'lodash/upperFirst': '_upperFirst',
                'lodash/camelCase': '_camelCase',
                'lodash/kebabCase': 'kebabCase',
                'lodash/snakeCase': 'snakeCase'
            },
            file: 'dist/index.min.js',
            format: 'iife',
            name: 'version',
            plugins: [terser()],
        },
    ],
    plugins: [commonjs(), babel({ babelHelpers: 'bundled' })],
};
