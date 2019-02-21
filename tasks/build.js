let argv = require('yargs').argv;
let bin = require('./bin');
let command = require('node-cmd');
let history = require('connect-history-api-fallback');

let BrowserSync = require('browser-sync');
let BrowserSyncPlugin = require('browser-sync-webpack-plugin');
let ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');

let browserSyncInstance;
let env = argv.e || argv.env || 'local';
let port = argv.p || argv.port || 3000;

module.exports = {
    jigsaw: {
        apply(compiler) {
            compiler.hooks.done.tap('DonePlugin', (compilation) => {
                command.get(bin.path() + ' build -q ' + env, (error, stdout, stderr) => {
                    console.log(error ? stderr : stdout);

                    if (browserSyncInstance) {
                        browserSyncInstance.reload();
                    }
                });
            });
        }
    },

    watch: function (opts) {
        return new ExtraWatchWebpackPlugin(opts);
    },

    browserSync: function (opts) {
        let proxy = opts.proxy || null;
        let baseDir = opts.baseDir ? opts.baseDir.replace(new RegExp('{env}', 'g'), env) : 'build_' + env + '/';

        return new BrowserSyncPlugin({
            open: false,
            notify: false,
            port: port,
            proxy: proxy,
            server: proxy ? null : {
                baseDir,
                middleware: [
                    history(),
                ],
            },
            watchEvents: ['add', 'change', 'unlink', 'addDir', 'unlinkDir'],
        },
        {
            reload: false,
            callback: function() {
                browserSyncInstance = BrowserSync.get('bs-webpack-plugin');
            },
        })
    },
};
