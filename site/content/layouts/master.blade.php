<!DOCTYPE html>
<!--[if IE 6]>
    <html id="app" lang="en" class="no-js ie ie-6 crie">
<![endif]-->
<!--[if IE 7]>
    <html id="app" lang="en" class="no-js ie ie-7 crie">
<![endif]-->
<!--[if IE 8]>
    <html id="app" lang="en" class="no-js ie ie-8 crie">
<![endif]-->
<!--[if IE 9]>
    <html id="app" lang="en" class="no-js ie ie-9">
<![endif]-->
<!--[if !IE]> -->
<html id="app" lang="en" class="no-js">
<!-- <![endif]-->
<head>
    <title>csstyle</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <!-- Environment: {{ env('APP_ENV') }} -->

    @include('resources.favicons')
    @include('resources.fonts')
    @include('resources.styles')
    @include('resources.scripts')
</head>
<body class="@home">
    <div id="container">
        <header>
            @include('parts.header')
        </header>
        <main>
            @yield('content')
        </main>
        <footer>
            @include('parts.footer')
        </footer>
    </div>
</body>
</html>
