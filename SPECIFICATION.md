# TOC
   - [json-to-divs-with-classes](#json-to-divs-with-classes)
     - [parsing](#json-to-divs-with-classes-parsing)
     - [arrays](#json-to-divs-with-classes-arrays)
     - [provide a super class name](#json-to-divs-with-classes-provide-a-super-class-name)
     - [uses an id in the object, in the div](#json-to-divs-with-classes-uses-an-id-in-the-object-in-the-div)
<a name=""></a>
 
<a name="json-to-divs-with-classes"></a>
# json-to-divs-with-classes
<a name="json-to-divs-with-classes-parsing"></a>
## parsing
empty json should return an empty div.

```js
var js = {};
var expected_html = '<div></div>';
test(js, expected_html);
```

null json should return an empty div.

```js
var js = null;
var expected_html = '<div></div>';
test(js, expected_html);
```

single string property.

```js
var js = {'name': 'value'};
var expected_html = '<div><div class="name">value</div></div>';
test(js, expected_html);
```

single number property.

```js
var js = {'name': 2};
var expected_html = '<div><div class="name">2</div></div>';
test(js, expected_html);
```

non-string property property.

```js
var js = {name: 2};
var expected_html = '<div><div class="name">2</div></div>';
test(js, expected_html);
```

two properties.

```js
var js = {'name1': 'value1', 'name2': 'value2'};
var expected_html = '<div><div class="name1">value1</div><div class="name2">value2</div></div>';
test(js, expected_html);
```

1 sub object.

```js
var js = {'name1': 'value1', 'name2': {'sub-name': 'sub-value'}};
var expected_html = '<div><div class="name1">value1</div><div class="name2"><div class="sub-name">sub-value</div></div></div>';
test(js, expected_html);
```

sub sub objects.

```js
var js = {'name1': 'value1', 'sub-obj1': {'sub-obj2': {'sub-obj-name': 'sub-obj-value'}}};
var expected_html = '<div><div class="name1">value1</div><div class="sub-obj1"><div class="sub-obj2"><div class="sub-obj-name">sub-obj-value</div></div></div></div>';
test(js, expected_html);
```

ignore functions.

```js
var js = {hello: function() {}};
var expected_html = '<div></div>';
test(js, expected_html);
```

<a name="json-to-divs-with-classes-arrays"></a>
## arrays
simple array.

```js
var js = {'arr1': ['1']};
var expected_html = `<div><div class="arr1 array"><div class="arr1 member n0">1</div></div></div>`;
test(js, expected_html);
```

simple array.

```js
var js = {'arr1': ['1', '2']};
var expected_html = `<div><div class="arr1 array"><div class="arr1 member n0">1</div><div class="arr1 member n1">2</div></div></div>`;
test(js, expected_html);
```

array of objects.

```js
var js = {'arr1': [{a: 'b'}]};
var expected_html = `<div><div class="arr1 array"><div class="arr1 member n0"><div class="a">b</div></div></div></div>`;
test(js, expected_html);
```

<a name="json-to-divs-with-classes-provide-a-super-class-name"></a>
## provide a super class name
super class name.

```js
var js = {'arr1': ['1']};
var expected_html = `<div class="class-name"><div class="arr1 array"><div class="arr1 member n0">1</div></div></div>`;
test(js, expected_html, {className: 'class-name'});
```

<a name="json-to-divs-with-classes-uses-an-id-in-the-object-in-the-div"></a>
## uses an id in the object, in the div
simple.

```js
var js = {'arr1': ['1'], id: 777};
var expected_html = `<div id="777"><div class="arr1 array"><div class="arr1 member n0">1</div></div><div class="id">777</div></div>`;
test(js, expected_html);
```

1 sub object.

```js
var js = {'id': 'id1', 'name2': {'id': 'id2'}};
var expected_html = '<div id="id1"><div class="id">id1</div><div class="name2" id="id2"><div class="id">id2</div></div></div>';
test(js, expected_html);
```

<a name="json-to-divs-with-classes"></a>
# json-to-divs-with-classes
### empty json obj
```json
{}
```
```xml
<div>
</div>
```

.

```js
test(data.inp, data.out, data.opts);
```

### single json property
```json
{
  "name": "value"
}
```
```xml
<div>
    <div class="name">
        value
    </div>
</div>
```

.

```js
test(data.inp, data.out, data.opts);
```

