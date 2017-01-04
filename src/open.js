module.exports = (pluginContext) => {
  return {
    respondsTo: (query) => {
      return query.match(/,c.*/)
    },
    search: (query, env = {}) => {
      const url = query.split(/\s+/)[1] || ''
      return new Promise((resolve, reject) => {
        resolve([
          {
            value: url,
          }
        ])
      })
    },
  }
}
