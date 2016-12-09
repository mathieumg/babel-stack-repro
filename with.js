require("babel-register")({
  plugins: [
    ["transform-es2015-classes", {loose: true}],
    ["babel-plugin-transform-builtin-extend", {
      globals: ["Error"],
      approximate: true,
    }],
  ],
});
require("./without");
