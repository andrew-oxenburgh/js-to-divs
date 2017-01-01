var assert = require('assert');
var json_to_div = require('./index');

function test(js, expected_html, opts) {
  assert.equal(json_to_div(js, opts), expected_html);
}

describe('json-to-divs-with-classes', function() {
  describe('parsing', function() {
    it('empty json should return an empty div', function() {
      var js = {};
      var expected_html = '<div></div>';
      test(js, expected_html);
    });
    it('null json should return an empty div', function() {
      var js = null;
      var expected_html = '<div></div>';
      test(js, expected_html);
    });
    it('single string property', function() {
      var js = {'name': 'value'};
      var expected_html = '<div><div class="name">value</div></div>';
      test(js, expected_html);
    });
    it('single number property', function() {
      var js = {'name': 2};
      var expected_html = '<div><div class="name">2</div></div>';
      test(js, expected_html);
    });
    it('non-string property property', function() {
      var js = {name: 2};
      var expected_html = '<div><div class="name">2</div></div>';
      test(js, expected_html);
    });
    it('two properties', function() {
      var js = {'name1': 'value1', 'name2': 'value2'};
      var expected_html = '<div><div class="name1">value1</div><div class="name2">value2</div></div>';
      test(js, expected_html);
    });
    it('1 sub object', function() {
      var js = {'name1': 'value1', 'name2': {'sub-name': 'sub-value'}};
      var expected_html = '<div><div class="name1">value1</div><div class="name2"><div class="sub-name">sub-value</div></div></div>';
      test(js, expected_html);
    });
    it('sub sub objects', function() {
      var js = {'name1': 'value1', 'sub-obj1': {'sub-obj2': {'sub-obj-name': 'sub-obj-value'}}};
      var expected_html = '<div><div class="name1">value1</div><div class="sub-obj1"><div class="sub-obj2"><div class="sub-obj-name">sub-obj-value</div></div></div></div>';
      test(js, expected_html);
    });
    it('ignore functions', function() {
      var js = {hello: function() {}};
      var expected_html = '<div></div>';
      test(js, expected_html);
    });
  });
  describe('arrays', function() {
    it('simple array', function() {
      var js = {'arr1': ['1']};
      var expected_html = `<div><div class="arr1 array"><div class="arr1 member n0">1</div></div></div>`;
      test(js, expected_html);
    });
    it('simple array', function() {
      var js = {'arr1': ['1', '2']};
      var expected_html = `<div><div class="arr1 array"><div class="arr1 member n0">1</div><div class="arr1 member n1">2</div></div></div>`;
      test(js, expected_html);
    });
    it('array of objects', function() {
      var js = {'arr1': [{a: 'b'}]};
      var expected_html = `<div><div class="arr1 array"><div class="arr1 member n0"><div class="a">b</div></div></div></div>`;
      test(js, expected_html);
    });
  });
  describe('provide a super class name', function() {
    it('super class name', function() {
      var js = {'arr1': ['1']};
      var expected_html = `<div class="class-name"><div class="arr1 array"><div class="arr1 member n0">1</div></div></div>`;
      test(js, expected_html, {className: 'class-name'});
    });
  });
  describe('uses an id in the object, in the div', function() {
    it('simple', function() {
      var js = {'arr1': ['1'], id: 777};
      var expected_html = `<div id="777"><div class="arr1 array"><div class="arr1 member n0">1</div></div><div class="id">777</div></div>`;
      test(js, expected_html);
    });
    it('1 sub object', function() {
      var js = {'id': 'id1', 'name2': {'id': 'id2'}};
      var expected_html = '<div id="id1"><div class="id">id1</div><div class="name2" id="id2"><div class="id">id2</div></div></div>';
      test(js, expected_html);
    });
  });
});

