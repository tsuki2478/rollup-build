import babel from 'rollup-plugin-babel'

export default {
    input: './src/index.js',
    output: {
        file: './lib/bundle.js',
        format: 'cjs' // 适用node
    },
    plugins: [babel()],
    external: ['react'] // 外部引入
}