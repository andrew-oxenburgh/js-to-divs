let assert = require('assert');
let json_to_div = require('./index');

describe('json-to-divs-with-classes', function() {
  describe('parsing', function() {
    it('empty json should return an empty div', function() {
      const js = {};
      const expected_html = '<div></div>';
      const actual_html = json_to_div(js);
      assert.equal(actual_html, expected_html);
    });
    it('null json should return an empty div', function() {
      const js = null;
      const expected_html = '<div></div>';
      const actual_html = json_to_div(js);
      assert.equal(actual_html, expected_html);
    });
    it('single string property', function() {
      const js = {'name': 'value'};
      const expected_html = '<div><div class="name">value</div></div>';
      const actual_html = json_to_div(js);
      assert.equal(actual_html, expected_html);
    });
    it('single number property', function() {
      const js = {'name': 2};
      const expected_html = '<div><div class="name">2</div></div>';
      const actual_html = json_to_div(js);
      assert.equal(actual_html, expected_html);
    });
    it('two properties', function() {
      const js = {'name1': 'value1', 'name2': 'value2'};
      const expected_html = '<div><div class="name1">value1</div><div class="name2">value2</div></div>';
      const actual_html = json_to_div(js);
      assert.equal(actual_html, expected_html);
    });
    it('1 sub object', function() {
      const js = {'name1': 'value1', 'name2': {'sub-name': 'sub-value'}};
      const expected_html = '<div><div class="name1">value1</div><div class="name2"><div class="sub-name">sub-value</div></div></div>';
      const actual_html = json_to_div(js);
      assert.equal(actual_html, expected_html);
    });
    it('sub sub objects', function() {
      const js = {'name1': 'value1', 'sub-obj1': {'sub-obj2': {'sub-obj-name': 'sub-obj-value'}}};
      const expected_html = '<div><div class="name1">value1</div><div class="sub-obj1"><div class="sub-obj2"><div class="sub-obj-name">sub-obj-value</div></div></div></div>';
      const actual_html = json_to_div(js);
      assert.equal(actual_html, expected_html);
    });
  });
  describe('arrays', function() {
    it('simple array', function() {
      const js = {'arr1': ['1']};
      const expected_html = `<div><div class="arr1"><div class="arr1-0">1</div></div></div>`;
      const actual_html = json_to_div(js);
      assert.equal(actual_html, expected_html);
    });
  });
});

