# json-to-divs

Convert a json object into a tree of divs for easily displaying using css.

See [Specification](SPECIFICATION.md) for examples.

## Reason

JSON is a great format for creating unstructured, or semi-structured data. It doesn't, however, show up too well on a browser.

This utility converts a json object in set of nested divs, with classes for easy formatting, using plain old CSS.

It produces the html frag with no new lines or indentation. If you need this, try 'xml-formatter'.

# Demo

Paste this in to runkit

```js

var divs = require("js-to-divs");
var format = require("xml-formatter");

format( '<html><header></header><body>' + divs({hello:'world'}) + '</body></html>');
```

# Test

Clone me, and run ```npm run qa```

# Notes:

This package has no production dependencies.

Maintain compatibility with node4+.

# TODO:

- [ ] Make me run from command line