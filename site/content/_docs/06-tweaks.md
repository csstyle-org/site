---
title: Tweaks
category: The Basics
---

Create generic style _tweaks_ that can be applied to any component, part, element, etc. Tweaks are applied using a `+` sign followed by the tweak name. Tweaks automatically override the styling of components, options, and parts so you never have to add extra nesting or use the dreaded <code class="language-css">!important</code> flag just to apply a style exception.

As with components, you can create multiple tweaks at once by passing a comma-separated list to the `tweak` mixin.

<div class="label">HTML</div>
```html
<p>
    <span class="label +rounded">label</span>
</p>

<a class="btn --action --has-icon +rounded">
    <i class="btn.icon"></i>
    Register Now
</a>
```

<div class="label">SCSS</div>
```scss
@include component(label) {
    padding: 2px 4px;
    background-color: #f92672;
    color: #fff;
    text-transform: uppercase;
}

@include tweak(rounded) {
    border-radius: 4px;
    overflow: hidden;
}
```

<div class="label">Result</div>
<div class="@preview result">
    <p>
        <span class="label +rounded">label</span>
    </p>

    <a class="btn --action --has-icon +rounded">
        <i class="btn.icon --lower-right-pencil"></i>
        Register Now
    </a>
</div>
