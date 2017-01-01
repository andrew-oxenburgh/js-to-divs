var assert = require('assert');
var json_to_div = require('./index');
var formatter = require('xml-formatter');

function test(js, expected_html, opts) {
  assert.equal(json_to_div(js, opts), expected_html);
}

describe('json-to-divs-with-classes', function() {

  var tests = [
      {
        message: 'empty json obj', inp: {}, out: '<div></div>', opts: {}
      },
     {
       message: 'single json property', inp: {'name': 'value'}, out: '<div><div class="name">value</div></div>', opts: {}
     }
   ];

  tests.forEach(function(data) {
    it(`### ${data.message}
\`\`\`json
${JSON.stringify(data.inp, null, '  ')}
\`\`\`
\`\`\`xml
${formatter(data.out)}
\`\`\`

`, function() {
      test(data.inp, data.out, data.opts);
    });
  });
});

