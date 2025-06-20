import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import css from "rollup-plugin-import-css";

export default [
    {
        input: "src/main.tsx",
        output: {
            file: "dist/bundle.mjs",
            format: "esm",
            sourcemap: true,
        },
        plugins: [nodeResolve(), typescript(), css({ inject: true })],
    },
];
