#! /usr/bin/env node

const { spawn } = require('child_process')

const name = process.argv[2]
if (!name || name.match(/[<>:"\/\\|?*\x00-\x1F]/)) {
  return console.log(`
  Invalid directory name.
  Usage: skeleton-express-api name-of-project  
`)
}

const repoURL = 'https://github.com/AlexEkdahl/nodejs-server-setup'

runCommand('git', ['clone', repoURL, name])
  .then(() => {
    return runCommand('rm', ['-rf', `${name}/.git`])
  })
  .then(() => {
    console.log('Installing dependencies...')
    return runCommand('npm', ['install'], {
      cwd: process.cwd() + '/' + name,
    })
  })
  .then(() => {
    return runCommand('cd', [name])
  })
  .then(() => {
    console.log('Done! 🏁')
    console.log('')
    console.log('To get started:')
    console.log('cd', name)
    console.log('then -> nodemon to run server on port 4000')
  })

function runCommand(command, args, options = undefined) {
  const spawned = spawn(command, args, options)

  return new Promise((resolve) => {
    spawned.stdout.on('data', (data) => {
      console.log(data.toString())
    })

    spawned.stderr.on('data', (data) => {
      console.error(data.toString())
    })

    spawned.on('close', () => {
      resolve()
    })
  })
}
