<?php

return [
    'production' => false,
    'baseUrl' => '',
    'collections' => [
        'docs',
    ],
    'build' => [
        'source' => 'site/content',
        'destination' => 'build/{env}',
        'assets' => 'assets',
        'ignore' => [
            'parts/',
            'layouts/',
            'resources/',
        ],
    ],
    'github' => [
        'org' => 'csstyle-org',
        'repo' => 'csstyle',
        'siteRepo' => 'site',
    ],
];
