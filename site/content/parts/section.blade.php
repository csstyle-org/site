<section class="section md:--fw md:--col-8 md:--offset-3 {{ $loop->index % 2 == 0 ? '+bg.light' : '+bg.dark' }}" id="{{ str_slug($section->title) }}">
    <div class="container-fluid">
        <div class="row">
            <div class="md:col-8 md:offset-3">
                <div class="section.content">
                    <h1>
                        <a href="#{{ str_slug($section->title) }}" @@click.prevent="Nav.go">
                            {{ $section->heading ?: $section->title }}
                        </a>
                    </h1>
                    {!! $section->getContent() !!}
                </div>
            </div>
        </div>
    </div>
</section>
