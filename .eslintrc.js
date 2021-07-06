console.log(`Loaded .eslintrc from the root folder. CWD is ${process.cwd()}`);

module.exports = {
  env: { es6: true, jest: true, node: true },
  extends: "eslint:recommended",
  root: true,
};
