// Rollup plugins
import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'
import postcss from 'rollup-plugin-postcss'

// PostCSS plugins
// import simplevars from 'postcss-simple-vars'
// import nested from 'postcss-nested'
// import cssnext from 'postcss-cssnext'
// import cssnano from 'cssnano'

const env = JSON.stringify(process.env.NODE_ENV || 'development')

export default {
  entry: 'index.js',
  dest: 'dist/index.js',
  format: 'cjs',
  sourceMap: 'inline',
  // moduleName: 'ReactBase',
  exports: 'named',
  plugins: [
    postcss({
      // plugins: [
      //   simplevars(),
      //   nested(),
      //   cssnext({ warnForDuplicates: false, }),
      //   cssnano()
      // ],
      extensions: [ '.css' ]
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    eslint({
      exclude: ['src/styles/**']
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': env,
      ENV: env
    }),
    uglify()
  ]
}
