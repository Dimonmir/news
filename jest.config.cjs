module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Можно использовать 'jsdom' для браузерных тестов
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
};