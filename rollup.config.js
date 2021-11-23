const typescript = require( "@rollup/plugin-typescript");
const { nodeResolve } = require( "@rollup/plugin-node-resolve");
const commonjs = require( "@rollup/plugin-commonjs");
const css = require( "rollup-plugin-css-only");

const svelte = require( "rollup-plugin-svelte");
const process = require( "svelte-preprocess");

const banner = `/*
THIS IS A GENERATED/BUNDLED FILE BY ROLLUP
if you want to view the source visit the plugins github repository
*/
`;

module.exports = {
    input: "./src/main.ts",
    output: {
        dir: ".",
        sourcemap: "inline",
        sourcemapExcludeSources: true,
        format: "cjs",
        exports: "default",
        banner
    },
    external: ["obsidian"],
    plugins: [
        typescript(),
        svelte({ emitCss: false, preprocess: process() }),
        nodeResolve({ browser: true, dedupe: ["svelte"] }),
        commonjs(),
        css({ output: "styles.css" })
    ]
};
