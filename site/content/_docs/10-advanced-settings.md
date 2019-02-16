---
title: Advanced Settings
heading: Changing settings on the fly
category: Advanced
status: new
---

You can change any of the csstyle settings on the fly if you need to, and csstyle even includes a handy mixin, `reset-csstyle`, to restore to the original or default settings.

<div class="label">SCSS</div>
```scss
$csstyle-option-symbol: '~';

@import '~csstyle/csstyle';

// Change setting on the fly
$csstyle-option-symbol: ':';
$csstyle-component-symbol: 'c-';

@include component(btn) {
    @include option(primary) {
        background: pink;
    }
}

// Reset to original settings
@include reset-csstyle;

@include component(btn) {
    @include option(secondary) {
        background: blue;
    }
}

// Reset to default settings
@include reset-csstyle(true);

@include component(btn) {
    @include option(info) {
        background: lightblue;
    }
}
```

<div class="label">Compiles to</div>
```css
html .c-btn.\:primary {
    background: pink;
}

html .btn.\~secondary {
    background: pink;
}

html .btn.\--info {
    background: lightblue;
}
```
