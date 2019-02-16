---
title: Components
category: The Basics
---

With csstyle you organize your CSS as reusable _components_.

<div class="label">HTML</div>
```html
<a class="btn">
    Button
</a>
```

<div class="label">SCSS</div>
```scss
@include component(btn) {
    display: inline-block;
    position: relative;
    padding: .5em 1em;
    color: #1f1f1f;
    background-color: #6bd9ed;
    transition: background-color .2s;

    &:hover {
        background-color: darken(#6bd9ed, 10%);
    }
}
```

<div class="label">Result</div>
<div class="@preview result">
    <a class="btn">
        Button
    </a>
</div>

You can create multiple components at once by passing a comma-separated list to the `component` mixin.

<div class="label">SCSS</div>
```scss
@include component(section, hero) {
    padding: 32px;
}
```

<div class="label">Compiles to</div>
```css
.section, .hero {
    padding: 32px;
}
```

Components are the primary building blocks of your project, the more you leverage them the better. csstyle's focus on components make it a perfect match for Web/Angular/Ember/React/Vue components.

> **Tip** Create a separate file for each component to make them easy to find & edit.
