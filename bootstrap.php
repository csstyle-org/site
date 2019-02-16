<?php

PHP_EOL;

use App\IgnoredHandler;
use TightenCo\Jigsaw\Jigsaw;
use TightenCo\Jigsaw\SiteBuilder;
use TightenCo\Jigsaw\File\Filesystem;
use TightenCo\Jigsaw\Handlers\BladeHandler;
use TightenCo\Jigsaw\Handlers\DefaultHandler;
use TightenCo\Jigsaw\Handlers\MarkdownHandler;
use TightenCo\Jigsaw\Handlers\PaginatedPageHandler;
use TightenCo\Jigsaw\Handlers\CollectionItemHandler;

/** @var $container \Illuminate\Container\Container */
/** @var $events \TightenCo\Jigsaw\Events\EventBus */

/**
 * You can run custom code at different stages of the build process by
 * listening to the 'beforeBuild', 'afterCollections', and 'afterBuild' events.
 *
 * For example:
 *
 * $events->beforeBuild(function (Jigsaw $jigsaw) {
 *     // Your code here
 * });
 */

$container->bind(IgnoredHandler::class, function ($c) {
    return new IgnoredHandler($c['config']);
});

$container->bind(SiteBuilder::class, function ($c) use ($cachePath) {
    return new SiteBuilder(new Filesystem, $cachePath, $c['outputPathResolver'], $c['consoleOutput'], [
        $c[CollectionItemHandler::class],
        $c[IgnoredHandler::class],
        $c[PaginatedPageHandler::class],
        $c[MarkdownHandler::class],
        $c[BladeHandler::class],
        $c[DefaultHandler::class],
    ]);
});

$events->afterBuild(function ($jigsaw) {
    $files = $jigsaw->getFilesystem();
    $content = rtrim($jigsaw->getSourcePath(), '/');
    $assets = ltrim($jigsaw->getConfig('build.assets'), '/');
});
