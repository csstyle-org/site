---
title: Settings
category: Getting Started
---

csstyle uses the following styling conventions to indicate what type of class is being applied to an element:

 - Components: no prefix
 - Options: `--`
 - Parts: `.`
 - Tweaks: `+`
 - Locations: `@`
 - Root id: `app`

You can customize all of these by setting the following variables in your sass file.

```scss
$csstyle-component-symbol: '';
$csstyle-option-symbol: '--';
$csstyle-part-symbol: '.';
$csstyle-tweak-symbol: '+';
$csstyle-location-symbol: '@';
$csstyle-root-id: 'app';
```

csstyle automatically escapes characters as needed, so you don't have to escape any special characters yourself when setting these variables.
