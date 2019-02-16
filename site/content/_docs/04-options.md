---
title: Options
category: The Basics
---

Make your components super flexible with _options_, passed as arguments to the component. Options override the component's default styling.

<div class="label">HTML</div>
```html
<a class="btn --action">
    Register Now
</a>
```

<div class="label">SCSS</div>
```scss
@include component(btn) {
    ...

    @include option(action) {
        background-color: #a7e040;
        color: #1f1f1f;

        &:hover {
            background-color: darken(#a7e040, 10%);
        }
    }
}
```

<div class="label">Result</div>
<div class="@preview result">
    <a class="btn --action">
        Register Now
    </a>
</div>

You can apply multiple options at once by passing a comma-separated list to the `option` mixin.

<div class="label">SCSS</div>
```scss
@include component(alert) {
    ...

    @include option(danger, info) {
        color: #fff;
    }
}
```

<div class="label">Compiles to</div>
```css
html .alert.\--danger, html .alert.\--info {
    color: #fff;
}
```

Options are a great way to organically grow your CSS over time. When you go to style something you can often just add a new option to an existing component. Code reuse FTW.
