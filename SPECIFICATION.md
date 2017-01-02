
<style>
.highlight-source-js{
    display: hidden;
}
</style>



# TOC
   - [json-to-divs-with-classes](#json-to-divs-with-classes)
<a name=""></a>
 
<a name="json-to-divs-with-classes"></a>
# json-to-divs-with-classes
### empty json obj creates empty div
 this json 
```json
{}
```
transforms to this xml
```xml
<div>
</div>
```

.

```js
test(data.inp, data.out, data.opts);
```

### null json return creates empty div
 this json 
```json
{
  "name": "value"
}
```
transforms to this xml
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

### single json property -> div with single value
 this json 
```json
{
  "name": "value"
}
```
transforms to this xml
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

### handles numeric properties
 this json 
```json
{
  "name": 2
}
```
transforms to this xml
```xml
<div>
    <div class="name">
        2
    </div>
</div>
```

.

```js
test(data.inp, data.out, data.opts);
```

### handles string names
 this json 
```json
{
  "name": 2
}
```
transforms to this xml
```xml
<div>
    <div class="name">
        2
    </div>
</div>
```

.

```js
test(data.inp, data.out, data.opts);
```

### handles multiple properties
 this json 
```json
{
  "name1": "value1",
  "name2": "value2"
}
```
transforms to this xml
```xml
<div>
    <div class="name1">
        value1
    </div>
    <div class="name2">
        value2
    </div>
</div>
```

.

```js
test(data.inp, data.out, data.opts);
```

### handles sub-objects
 this json 
```json
{
  "name1": "value1",
  "name2": {
    "sub-name": "sub-value"
  }
}
```
transforms to this xml
```xml
<div>
    <div class="name1">
        value1
    </div>
    <div class="name2">
        <div class="sub-name">
            sub-value
        </div>
    </div>
</div>
```

.

```js
test(data.inp, data.out, data.opts);
```

### handles sub-sub-objects
 this json 
```json
{
  "name1": "value1",
  "sub-obj1": {
    "sub-obj2": {
      "sub-obj-name": "sub-obj-value"
    }
  }
}
```
transforms to this xml
```xml
<div>
    <div class="name1">
        value1
    </div>
    <div class="sub-obj1">
        <div class="sub-obj2">
            <div class="sub-obj-name">
                sub-obj-value
            </div>
        </div>
    </div>
</div>
```

.

```js
test(data.inp, data.out, data.opts);
```

### handles empty array
 this json 
```json
{
  "arr1": []
}
```
transforms to this xml
```xml
<div>
    <div class="arr1 array">
    </div>
</div>
```

.

```js
test(data.inp, data.out, data.opts);
```

### handles array of one member
 this json 
```json
{
  "arr1": [
    "1"
  ]
}
```
transforms to this xml
```xml
<div>
    <div class="arr1 array">
        <div class="arr1 member n0">
            1
        </div>
    </div>
</div>
```

.

```js
test(data.inp, data.out, data.opts);
```

### handles arrays with multiple members
 this json 
```json
{
  "arr1": [
    "1",
    "2"
  ]
}
```
transforms to this xml
```xml
<div>
    <div class="arr1 array">
        <div class="arr1 member n0">
            1
        </div>
        <div class="arr1 member n1">
            2
        </div>
    </div>
</div>
```

.

```js
test(data.inp, data.out, data.opts);
```

### handles an array of objects
 this json 
```json
{
  "arr1": [
    {
      "a": "b"
    }
  ]
}
```
transforms to this xml
```xml
<div>
    <div class="arr1 array">
        <div class="arr1 member n0">
            <div class="a">
                b
            </div>
        </div>
    </div>
</div>
```

.

```js
test(data.inp, data.out, data.opts);
```

### using options, can add a class name to wrapping div with options {"className":"class-name"}
 this json 
```json
{
  "arr1": [
    "1"
  ]
}
```
transforms to this xml
```xml
<div class="class-name">
    <div class="arr1 array">
        <div class="arr1 member n0">
            1
        </div>
    </div>
</div>
```

.

```js
test(data.inp, data.out, data.opts);
```

### picks up a property 'id' and adds it to the div
 this json 
```json
{
  "arr1": [
    "1"
  ],
  "id": 777
}
```
transforms to this xml
```xml
<div id="777">
    <div class="arr1 array">
        <div class="arr1 member n0">
            1
        </div>
    </div>
    <div class="id">
        777
    </div>
</div>
```

.

```js
test(data.inp, data.out, data.opts);
```

