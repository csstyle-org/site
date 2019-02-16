---
title: Manual Selectors
heading: Manually Creating Selectors
category: Advanced
status: new
---

You can manually generate selectors for components, parts, options, tweaks and locations if you ever need them. You can then use interpolation to use them. This is done by using their respective functions.

 - <code class="language-scss">component()</code>: Prefixes the given string with a `.` and the escaped component symbol.
 - <code class="language-scss">part()</code>: Prefixes the given string with the escaped part symbol.
 - <code class="language-scss">option()</code>: Prefixes the given string with a `.` and the escaped option symbol.
 - <code class="language-scss">tweak()</code>: Prefixes the given string with a `.` and the escaped tweak symbol.
 - <code class="language-scss">location()</code>: Prefixes the given string with a `.` and the escaped location symbol.

Manually generating selectors can be useful for creating complex selectors that csstyle can't generate, using csstyle selectors outside their required parents, or extending csstyle selectors.

<div class="label">SCSS</div>
```scss
p {
    margin: 16px 0;

    &#{option(first)} {
        margin-top: 0;
    }

    &#{option(last)} {
        margin-bottom: 0;
    }
}

@include tweak(shadow) {
    box-shadow: 0 2px 5px 0 rgba(#000, .16), 0 2px 10px 0 rgba(#000, .12);

    &:not(#{component(nav)}#{option(fixed)}) {
        z-index: 5;
    }
}
```

<div class="label">Compiles to</div>
```css
p {
    margin: 16px 0;
}

p.\--first {
    margin-top: 0;
}

p.\--last {
    margin-bottom: 0;
}

#app .\+shadow {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
}

#app .\+shadow:not(.nav.\--fixed) {
  z-index: 5;
}
```

> **Note** Bear in mind that manually generating selectors does not deal with specificty or nesting!
