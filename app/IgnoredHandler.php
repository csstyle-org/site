<?php

namespace App;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class IgnoredHandler
{
    private $config;
    
    public function __construct($config)
    {
        $this->config = $config;
    }
    
    public function shouldHandle($file)
    {
        return Str::startsWith($file->getRelativePathname(), Arr::get($this->config, 'build.ignore'));
    }
    
    public function handle($file, $data)
    {
        return collect([]);
    }
}
