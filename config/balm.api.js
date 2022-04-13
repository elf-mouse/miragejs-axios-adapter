const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { babel } = require('@rollup/plugin-babel');

const plugins = [
  nodeResolve(),
  babel({
    exclude: 'node_modules/**',
    extensions: ['.js'],
    babelHelpers: 'runtime',
    presets: ['@babel/preset-env']
  }),
  commonjs()
];

const inputOptions = {
  input: `./lib/index.js`,
  plugins
};
const outputOptions = {
  file: './dist/index.js',
  format: 'umd',
  name: 'miragejsAxiosAdapter'
};

module.exports = (mix) => {
  mix.remove('dist');

  mix.rollup(inputOptions, outputOptions);
};
