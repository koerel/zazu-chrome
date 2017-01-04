'use strict'

module.exports = (pluginContext) => {
  return (query, env) => {
    const variables = env || {}
    return new Promise((resolve, reject) => {
      resolve([
        {
          id: query,
          title: query,
          subtitle: query,
          value: query,
        }
      ])
    })
  }
}