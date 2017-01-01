# json-to-divs

Convert a json object into a tree of divs for easily displaying using css.

## Reason

JSON is a great format for creating unstructured, or semi-structured data. It doesn't, however, show up too well on a browser.

This utility converts a json object in set of nested divs, with classes for easy formatting, using plain old CSS.

It produces the html frag with no new lines or indentation. If you need this, try 'xml-formatter'.

## Examples

See [Specification](SPECIFICATION.md)

# Demo

Paste this in to runkit

```js

var divs = require("js-to-divs");
var format = require("xml-formatter");

format( '<html><header></header><body>' + divs({hello:'world'}) + '</body></html>');
```

# Test
Clone me, and run ```npm test```



# Notes:

This package has no production dependencies.

Maintain compatibility with node4+.

# Collaboration

Please run ```npm run qa```, for complete test and formatting checks

# TODO:

- [ ] Make me run from command line
- [ ] Make me output all test cases into a cool file for documentation