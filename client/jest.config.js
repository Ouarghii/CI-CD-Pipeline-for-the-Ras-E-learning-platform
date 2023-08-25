export default {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.m?js$': 'babel-jest',
    },
    moduleNameMapper: {
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./src/setupTests.js'], // Replace with the path to your setupTests file
    moduleDirectories: ['node_modules', 'src'],
  };
  