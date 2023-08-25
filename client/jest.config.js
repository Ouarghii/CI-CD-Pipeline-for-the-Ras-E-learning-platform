module.exports = {
    testEnvironment: 'jsdom', // Use jsdom as the testing environment
    roots: ['<rootDir>/src'], // Specify the directory containing your test files
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'], // Specify the test file patterns
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Transform JavaScript files using Babel
    },
  };
  