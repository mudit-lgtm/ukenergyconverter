module.exports = {
  apps: [
    {
      name: 'ukconverter',
      script: 'python3',
      args: '-m http.server 3000',
      cwd: '/home/user/webapp',
      env: { PORT: 3000 },
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}
