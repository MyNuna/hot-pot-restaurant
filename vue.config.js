process.env.APP_PUBLISH = new Date().getTime
module.exports = {
    publicPath: './',
    // outputDir: 'dist',
    devServer: {
        port: 8081,
    },

    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: true,
            includeLocales: false,
            enableBridge: true
        }
    }
}