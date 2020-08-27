const version = '2.0.0'
const npmTag = 'latest'

const releaseArguments = [
  'publish',
  version,
  '--force-publish',
  '--npm-tag',
  npmTag,
  '*'
]

console.log(`lerna ${releaseArguments.join(' ')}`)

await execa(require.resolve('lerna/cli'), releaseArguments, { stdio: 'inherit' })