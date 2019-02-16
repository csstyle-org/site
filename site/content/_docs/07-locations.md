---
title: Locations
category: The Basics
---

Projects occasionally need to override styles in specific _locations_ e.g. just on the home page or just in the chat feature. Locations are applied using an `@` sign followed by the location name.

As with components, you can create multiple locations at once by passing a comma-separated list to the `location` mixin.

<div class="label">HTML</div>
```html
<form class="form @has-errors">
    <div class="alert --danger +hidden">
        Please fix the errors before submitting the form.
    </div>
    <div class="form.group @has-error">
        <label for="email">Email address</label>
        <input type="email" class="form.control" id="email"
            placeholder="jane@example.com">
        <div class="form.feedback">
            Please enter a valid email address.
        </div>
    </div>
</form>
```

<div class="label">SCSS</div>
```scss
@include tweak(hidden) {
    display: none;
}

@include location(has-errors) {
    @include tweak(hidden) {
        display: block;
    }
}

@include location(has-error) {
    label {
        color: #dc3545;
    }

    @include component(form) {
        @include part(feedback) {
            color: #dc3545;
        }

        @include part(control) {
            border-color: #dc3545;
        }
    }
}
```

<div class="label">Result</div>
<div class="@preview result +text.left">
    <form class="form @has-errors">
        <div class="alert --danger +hidden">
            Please fix the errors before submitting the form.
        </div>
        <div class="form.group @has-error">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form.control" id="exampleInputEmail1" placeholder="jane@example.com">
            <div class="form.feedback">
                Please enter a valid email address.
            </div>
        </div>
    </form>
</div>
