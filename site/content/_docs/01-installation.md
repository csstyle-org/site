---
title: Installation
category: Getting Started
---

Install csstyle via npm or yarn.

```shell
$ npm install --save-dev csstyle
$ yarn add --dev csstyle
```

Next, you need to add the `app` id to your `html` tag. You can use another id if you like, but you will need to configure this in your csstyle settings.

```html
<!DOCTYPE html>
<html id="app" lang="en">
...
</html>
```

Lastly, you'll need to import csstyle in your main sass file.

```scss
@import '~csstyle/csstyle';
```

Now you're set and can start creating components with options & parts, adding in tweaks and locations as needed. Enjoy!
