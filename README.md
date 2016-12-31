# json-to-divs

Convert a json object into a tree of divs for easily displaying using css.

## Reason

JSON is a great format for creating unstructured, or semi-structured data. It doesn't, however, show up too well on a browser.

This utility converts a json object in set of nested divs, with classes for easy formatting, using plain old CSS.

It produces the html frag with no new lines or indentation. If you need this, try 'xml-formatter'.

## Examples

### Empty Object
from: 
```json
{}
```

to: 
```xml
<div></div>
```

### Object with sub-objects
from: 
```json
{
    "name1": "value1", 
    "name2": {
        "sub-name": "sub-value"
    }
}
```

to: 

```xml
<div>
    <div class="name1">value1</div>
    <div class="name2">
        <div class="sub-name">sub-value</div>
    </div>
</div>
```

### Object with an array
from:
```json
{
  "arr1": ["1"]
}

```

to:
```html

<div>
    <div class="arr1">
        <div class="arr1-0">1</div>
     </div>
</div>
```

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




sample
```json
{ id: 'id1', name2: { id: 'id2' } }
```

```html
<div id="id1"><div class="id">id1</div><div class="name2" id="id2"><div class="id">id2</div></div></div>
```