module.exports = (pluginContext) => {
    return (query) => {
        return new Promise((resolve, reject) => {
            resolve([
            {
                title: query,
                value: query,
            }
            ])
        })
    }
}
