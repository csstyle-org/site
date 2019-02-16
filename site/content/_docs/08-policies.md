---
title: Policies
category: The Basics
status: new
---

_Policies_ are new in csstyle 2, and are a convenient way to automatically apply certain styles to any components, parts, options, tweaks, locations, or even your own css selectors, without having to create a separate class for them. In the background, csstyle simply creates a _placeholder_ class that gets extended whenever the policy is applied. Policies are a handy tool to avoid code repetition.

There are two ways to create policies. You can use the dedicated `add-policy` mixin, or use the `policy` mixin and pass <code class="language-scss">true</code> to the second parameter. To apply a policy, simply use the `policy` mixin and pass the policy name.

<div class="label">SCSS</div>
```scss
@include add-policy(margin) {
    &:first-child {
        margin-top: 0;
    }

    &:last-child {
        margin-bottom: 0;
    }
}

@include policy(padding, true) {
    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
    }
}

@include component(section) {
    margin: 32px 0;
    @include policy(margin);
}

@include component(nav) {
    @include part(item) {
        margin: 8px 0;
        padding: 4px;
        border-left: 1px solid;
        @include policy(margin);
        @include policy(padding);
    }
}

p {
    padding: 16px 0;
    @include policy(padding);
}
```

<div class="label">Compiles to</div>
```css
.section {
    margin: 32px 0;
}

.nav\.item {
    margin: 8px 0;
    padding: 4px;
    border-left: 1px solid;
}

p {
    padding: 16px 0;
}

/* Margin policy */
.section:first-child, .nav\.item:first-child {
    margin-top: 0;
}
.section:last-child, .nav\.item:last-child {
    margin-bottom: 0;
}

/* Padding policy */
p:first-child, .nav\.item:first-child {
    padding-top: 0;
}
p:last-child, .nav\.item:last-child {
    padding-bottom: 0;
}
```

> **Tip** You don't have to worry about accidentally overwriting placeholder classes, csstyle prefixes the placeholder classes for policies automatically with `%csstyle-policy-`.
