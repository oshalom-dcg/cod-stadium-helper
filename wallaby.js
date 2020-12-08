module.exports = () => {
  return {
    files: ["something.js"],
    tests: ["*Spec.js"],
    env: {
      kind: "chrome",
    },
    debug: true,
  };
};
