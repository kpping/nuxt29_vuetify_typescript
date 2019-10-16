module.exports = {
  setupFiles: ['./polyfills/index.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['js', 'ts', 'vue', 'json'],
  transform: {
    '^.+\\.[jt]s$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
};
