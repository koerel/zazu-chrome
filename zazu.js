// Deprecated use zazu.json instead.
const path = require('path')

module.exports = {
  name: 'zazu-template',
  version: '1.0.0',
  description: 'Zazu Template for starting your own plugin.',
  blocks: {
    input: [
      {
        id: 'template',
        type: 'Keyword',
        keyword: 'template',
        title: 'Zazu Template',
        subtitle: 'Goto Zazu Template GitHub Repo',
        icon: 'fa-files-o',
        connections: ['GoHome'],
      },
      {
        id: 'hello',
        type: 'RootScript',
        script: path.join('src', 'hello.js'),
      },
    ],
    output: [
      {
        id: 'GoHome',
        type: 'OpenInBrowser',
        url: 'https://github.com/tinytacoteam/zazu-template',
      },
    ],
  },
}
