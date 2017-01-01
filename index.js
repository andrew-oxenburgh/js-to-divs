function appendValues(js, ret) {
  for (var prop in js) {
    if (!js.hasOwnProperty(prop)) {
      continue;
    }
    var entry = js[prop];
    if (typeof entry === 'function') {
      continue;
    }
    if (Array.isArray(entry)) {
      ret += div(appendArray(entry, prop, ''), prop + ' array');
    } else if (typeof entry === 'object') {
      ret += div(appendValues(entry, ''), prop, entry.id);
    } else {
      ret += div(entry, prop, entry.id);
    }
  }
  return ret;
}

function arrayMemberName(className, off) {
  return className + ' member n' + off;
}

function appendArray(js, className, ret) {
  for (var off in js) {
    var entry = js[off];
    if (typeof entry === 'object') {
      ret += div(appendValues(entry, ''), arrayMemberName(className, off), js.id);
    }else {
      ret += div(entry, arrayMemberName(className, off), js.id);
    }
  }
  return ret;
}

function div(str, className, id) {
  var classFrag = className ? ` class="${className}"` : '';
  var idFrag = id ? ` id="${id}"` : '';

  return `<div${classFrag}${idFrag}>${str}</div>`;
}

function json_to_div(js, opts) {
  opts = opts || {className: ''};
  if (js == null) {
    return div('', opts.className);
  }

  return div(appendValues(js, ''), opts.className, js.id);
}

module.exports = json_to_div;
