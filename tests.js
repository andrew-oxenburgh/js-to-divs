var assert = require('assert');
var json_to_div = require('./index');
var formatter = require('xml-formatter');

function test(js, expected_html, opts) {
  assert.equal(json_to_div(js, opts), expected_html);
}

describe('json-to-divs-with-classes', function() {

  var tests = [
      {
        message: 'empty json obj creates empty div',
        inp: {},
        out: '<div></div>'
      },
      {
        message: 'null json return creates empty div',
        inp: {'name': 'value'},
        out: '<div><div class="name">value</div></div>'
      },
      {
        message: 'single json property -> div with single value',
        inp: {'name': 'value'},
        out: '<div><div class="name">value</div></div>'
      }
      , {
        message: 'handles numeric properties',
        inp: {'name': 2},
        out: '<div><div class="name">2</div></div>'
      }
      , {
        message: 'handles string names',
        inp: {'name': 2},
        out: '<div><div class="name">2</div></div>'
      }
      , {
        message: 'handles multiple properties',
        inp: {'name1': 'value1', 'name2': 'value2'},
        out: '<div><div class="name1">value1</div><div class="name2">value2</div></div>'
      }
      , {
        message: 'handles sub properties',
        inp: {'name1': 'value1', 'name2': {'sub-name': 'sub-value'}},
        out: '<div><div class="name1">value1</div><div class="name2"><div class="sub-name">sub-value</div></div></div>'
      }
      , {
        message: 'handles sub-objects',
        inp: {'name1': 'value1', 'sub-obj1': {'sub-obj2': {'sub-obj-name': 'sub-obj-value'}}},
        out: '<div><div class="name1">value1</div><div class="sub-obj1"><div class="sub-obj2"><div class="sub-obj-name">sub-obj-value</div></div></div></div>'
      }
      , {
        message: 'handles array of one member',
        inp: {'arr1': ['1']},
        out: '<div><div class="arr1 array"><div class="arr1 member n0">1</div></div></div>'
      }
      , {
        message: 'handles array with no members',
        inp: {'arr1': []},
        out: '<div><div class="arr1 array"></div></div>'
      }
      , {
        message: 'handles arrays with multiple members',
        inp: {'arr1': ['1', '2']},
        out: '<div><div class="arr1 array"><div class="arr1 member n0">1</div><div class="arr1 member n1">2</div></div></div>'
      }
      , {
        message: 'handles an array of objects',
        inp: {'arr1': [{'a': 'b'}]},
        out: '<div><div class="arr1 array"><div class="arr1 member n0"><div class="a">b</div></div></div></div>'
      }
      , {
        message: 'can add a class name to wrapping div',
        inp: {'arr1': ['1']},
        out: '<div class="class-name"><div class="arr1 array"><div class="arr1 member n0">1</div></div></div>',
        opts: {'className': 'class-name'}
      }
      , {
        message: 'picks up a property \'id\' and adds it to the div',
        inp: {'arr1': ['1'], 'id': 777},
        out: '<div id="777"><div class="arr1 array"><div class="arr1 member n0">1</div></div><div class="id">777</div></div>'
      }
   ];

  /* jshint ignore:start */

  tests.forEach(function(data) {
    let inpFormatted = JSON.stringify(data.inp, null, '  ');
    var outFormatted = formatter(data.out.replace(/\"/g, '\''));
    var optsFormatted = data.opts ? (' with options ' + JSON.stringify(data.opts)) : '';
    it('### ' +
       data.message +
          optsFormatted +
       '\n this json ' +
       '\n\`\`\`json\n' +
       inpFormatted +
       '\n\`\`\`\n' +
       'transforms to this xml' +
       '\n\`\`\`xml\n' +
       outFormatted +
       '\n\`\`\`\n\n', function() {
      test(data.inp, data.out, data.opts);
    }
 )
 ;
  });

  /* jshint ignore:end */

});

