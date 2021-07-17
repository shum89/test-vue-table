module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue3-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['/tests//.spec.(ts|tsx|js|jsx)'],
};
