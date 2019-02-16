@extends('layouts.master')

@section('content')
<section class="hero +bg.dark" id="home">
    <div class="hero.section text-center">
        <div class="container">
            <div class="row md:justify-center">
                <div class="md:col-8">
                    <section class="hero.section">
                        <div class="logo">
                            <span class="logo.dashes">--</span><span class="logo.cs">cs</span><span class="logo.style">style</span>
                        </div>
                    </section>
                    <section class="hero.section">
                        <h1>
                            <em>clean</em>, <em>simple</em> styling for the <em>web</em>
                        </h1>
                    </section>
                    <section class="hero.section">
                        <p>csstyle is a modern approach for crafting <em>beautifully maintainable</em> stylesheets. Keeping CSS clean and organized is really hard. csstyle provides a higher-level abstraction for writing modular CSS. Written for <a href="https://sass-lang.com" target="_blank">Sass</a>, it makes your CSS readable and semantic, generates your selectors for you, and automatically handles things like specificity and nesting.</p>
                        <p>csstyle makes your project's styling <em>refreshingly consistent</em></p>
                    </section>
                </div>
            </div>
        </div>
    </div>
    <div class="hero.section text-center">
        <div class="container">
            <div class="row md:justify-center">
                <div class="md:col-8">
                    <section class="hero.more">
                        <a href="#{{ str_slug($docs->first()->title) }}" @@click.prevent="Nav.go">learn more</a>
                    </section>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="container-fluid">
    <div class="row no-gutters --has-fw">
        <aside class="md:col-3">
            <nav class="sidebar --sticky">
                @php($category = null)
                @foreach ($docs as $section)
                    @if ($section->category != $category)
                        @php($category = $section->category)
                        <div class="sidebar.heading">
                            {{ $category }}
                        </div>
                    @endif
                    <a href="#{{ str_slug($section->title) }}" class="sidebar.item" @@click.prevent="Nav.go">
                        {{ $section->title }}
                        @if ($section->status == 'new')
                            <span class="badge">new</span>
                        @endif
                    </a>
                @endforeach
            </nav>
        </aside>
        <main class="md:col-8 --has-fw">
            @foreach($docs as $section)
                @include('parts.section', ['section' => $section, 'loop' => $loop])
            @endforeach
        </main>
    </div>
</div>
@endsection
