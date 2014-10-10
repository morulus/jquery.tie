jquery.tie
==========

Additional functions for HTML build

# Usage
```javascript
// Adds a inside div (return this a)
$("div").put($('<a />', {
  "class": "newa"
}));

// Adds a after div (return this a)
$("div").and($('<a />', {
  "class": "newa"
}));

// Adds a before div (return this a)
$("div").before($('<a />', {
  "class": "newa"
}));

// Call anonym function in context of div (return this div)
$("div").tie(function() {
  $(this).put($('<a />'));
});

// Eval condition and call first function is true and second function if false (return functions result)
$("div").condition(a==b, function() {
  return $(this).put($('<a />'));
}, function() {
  $(this).and($('<div />'));
  return this;
});

```

# Benefits
Compact code and ease to creating sub-elements
```javscript
  $('body')
  .put($('<header />'))
  .tie(function() {
    $(this).put($('<h1 />')).html('Hello, world')
    .and($('<article />')).html('It's my article'));
  })
  .and($('<footer />'))
    .put($('<summary />')).html('Call me');
```

# Install
```bower
  $ bower install jquery.tie
```
