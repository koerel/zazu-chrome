module.exports = (pluginContext) => {
    return (query) => {
        return new Promise((resolve, reject) => {
            resolve([
            {
                id: 1,
                title: query,
                value: query,           
            }
            ])
        })
    }
}
