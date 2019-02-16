---
title: Specificity
category: Advanced
status: new
---

csstyle automatically handles _specificity_ for you where necessary. It does this by nesting the compiled selectors. Options are automatically nested in the `html` selector, while `tweaks` are automatically nested in the `#app` selector (where `app` is the value of <code class="language-scss">$csstyle-root-id</code>). If the compiled selector contains both a tweak and an option, it will nest it inside `html#app`.

New in csstyle 2 is the `important` mixin. If there is ever a reason you want to increase the specificty of certain styles, you can use the `important` mixin. Any styles contained in its body will be nested inside an `html#app` selector.

In the example below, we can ensure our `btn` component always has a `border-radius` of `0`, even if the `rounded` tweak is applied.

<div class="label">SCSS</div>
```scss
@include component(btn) {
    @include option(action) {
        background-color: #a7e040;
    }

    @include important {
        border-radius: 0;
    }
}

@include tweak(rounded) {
    border-radius: 4px;
}
```

<div class="label">Compiles to</div>
```css
/* Specificity: 1, 1, 1 */
html#app .btn {
    border-radius: 0;
}

/* Specificity: 0, 2, 1 */
html .btn.\--action {
    background-color: #a7e040;
}

/* Specificity: 1, 1, 0 */
#app .\+rounded {
    border-radius: 4px;
}
```
