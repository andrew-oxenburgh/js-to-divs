var assert = require('assert');
var json_to_div = require('./index');

describe('json-to-divs-with-classes', function() {
  describe('parsing', function() {
    it('empty json should return an empty div', function() {
      var js = {};
      var expected_html = '<div></div>';
      var actual_html = json_to_div(js);
      assert.equal(actual_html, expected_html);
    });
    it('null json should return an empty div', function() {
      var js = null;
      var expected_html = '<div></div>';
      var actual_html = json_to_div(js);
      assert.equal(actual_html, expected_html);
    });
    it('single string property', function() {
      var js = {'name': 'value'};
      var expected_html = '<div><div class="name">value</div></div>';
      var actual_html = json_to_div(js);
      assert.equal(actual_html, expected_html);
    });
    it('single number property', function() {
      var js = {'name': 2};
      var expected_html = '<div><div class="name">2</div></div>';
      var actual_html = json_to_div(js);
      assert.equal(actual_html, expected_html);
    });
    it('two properties', function() {
      var js = {'name1': 'value1', 'name2': 'value2'};
      var expected_html = '<div><div class="name1">value1</div><div class="name2">value2</div></div>';
      var actual_html = json_to_div(js);
      assert.equal(actual_html, expected_html);
    });
    it('1 sub object', function() {
      var js = {'name1': 'value1', 'name2': {'sub-name': 'sub-value'}};
      var expected_html = '<div><div class="name1">value1</div><div class="name2"><div class="sub-name">sub-value</div></div></div>';
      var actual_html = json_to_div(js);
      assert.equal(actual_html, expected_html);
    });
    it('sub sub objects', function() {
      var js = {'name1': 'value1', 'sub-obj1': {'sub-obj2': {'sub-obj-name': 'sub-obj-value'}}};
      var expected_html = '<div><div class="name1">value1</div><div class="sub-obj1"><div class="sub-obj2"><div class="sub-obj-name">sub-obj-value</div></div></div></div>';
      var actual_html = json_to_div(js);
      assert.equal(actual_html, expected_html);
    });
  });
  describe('arrays', function() {
    it('simple array', function() {
      var js = {'arr1': ['1']};
      var expected_html = `<div><div class="arr1"><div class="arr1-0">1</div></div></div>`;
      var actual_html = json_to_div(js);
      assert.equal(actual_html, expected_html);
    });
  });
});

