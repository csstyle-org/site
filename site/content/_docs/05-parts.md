---
title: Parts
category: The Basics
---

Components are composed of _parts_ — child elements of the component that can be styled. Parts are very flexible. They can nest in other parts, react to component options, or even have their own dedicated options. Parts are applied using the component name followed by `.` and the part name.

<div class="label">HTML</div>
```html
<a class="btn --action --has-icon">
    <i class="btn.icon"></i>
    Register Now
</a>
```

<div class="label">SCSS</div>
```scss
@include component(btn) {
    ...

    @include option(has-icon) {
        // padding-left: icon.width + padding-right;
        padding-left: 1.5em + .5em * 2 + 1em;
    }

    @include part(icon) {
        display: inline-block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        // width: line-height + padding-top * 2;
        width: 1.5em + .5em * 2;
        padding-right: 4px;
        background-color: rgba(#000, .1);

        @include option(lower-right-pencil) {
            &:before {
                content: '\270E';
                font-size: 1.5em;
                line-height: 1.7;
            }
        }
    }
}
```

<div class="label">Result</div>
<div class="@preview result">
    <a class="btn --action --has-icon">
        <i class="btn.icon --lower-right-pencil"></i>
        Register Now
    </a>
</div>

You can create multiple parts at once by passing a comma-separated list to the `part` mixin.

<div class="label">SCSS</div>
```scss
@include component(alert) {
    ...

    @include part(icn, content) {
        padding: 8px;
    }
}
```

<div class="label">Compiles to</div>
```css
.alert\.icn, .alert\.content {
    padding: 8px;
}
```

Parts make it easy to break complex components up into manageable chunks.
