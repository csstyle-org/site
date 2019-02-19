const argv = require('yargs').argv;
const mix = require('laravel-mix');
const build = require('./tasks/build.js');

// Mix plugins
require('laravel-mix-imagemin');
require('laravel-mix-tailwind');

let env = argv.e || argv.env || 'local';
let port = argv.p || argv.port || 3000;

mix.options({
    clearConsole: false,
});
mix.setPublicPath('site/content/assets');
mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: 'import-glob-loader'
            },
        ],
    },
    plugins: [
        build.jigsaw,
        build.browserSync({baseDir: 'build/{env}'}),
        build.watch({
            files: [
                'config*.php',
                'tailwind.js',
                'package.json',
                'webpack.mix.js',
                'tailwind/**/*.js',
                'site/content/**/*.md',
                'site/content/**/*.php',
                'site/assets/**/*.scss',
                '!site/content/assets/*'
            ],
        }),
    ],
});
mix.babelConfig({
    'plugins': [
        'transform-class-properties',
        ['prismjs', {
            'languages': [
                'clike',
                'markup',
                'css',
                'scss',
                'javascript',
                'bash',
            ],
            'plugins': [
                'line-numbers',
                'normalize-whitespace',
            ],
            'theme': 'default',
            'css': true,
        }],
    ],
});

mix.js('site/assets/js/app.js', 'js')
    .tailwind()
    .sass('site/assets/sass/app.scss', 'css')
    .imagemin(
        [
            'img/**/*.@(jpg|jpeg|png|gif|svg)',
            'favicons/**/*.!(psd)',
        ],
        {
            context: 'site/assets',
        }
    )
    .sourceMaps()
    .version();
