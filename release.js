const version = '1.0.1'
const npmTag = 'latest'
const execa = require('execa')
const releaseArguments = [
  'publish',
  version,
  '--force-publish',
  '*',
  '--npm-tag',
  npmTag
]

console.log(`lerna ${releaseArguments.join(' ')}`)
execa(require.resolve('lerna/cli'), releaseArguments, { stdio: 'inherit' })