'use strict'

module.exports = (pluginContext) => {
  return (query, env) => {
    const variables = env || {}
    const value = query.includes('.') ? `http://${value}` : `https://google.com?q=${query}`;
    return new Promise((resolve, reject) => {
      resolve([
        {
          id: query,
          title: query,
          subtitle: query,
          value: value,
        }
      ])
    })
  }
}