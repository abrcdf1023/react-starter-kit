module.exports = {
  rootDir: 'src',
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/$1',
  },
  reporters: [
    'default',
    ['jest-junit', { output: 'jenkinsJunitResult/result.xml' }],
  ],
}
