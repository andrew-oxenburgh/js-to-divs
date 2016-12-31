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
      ret += div(appendValues(entry, ''), prop);
    } else {
      ret += div(entry, prop);
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
    if(typeof entry === 'object'){
       ret += div(appendValues(entry, ''), arrayMemberName(className, off));
    }else{
       ret += div(entry, arrayMemberName(className, off));
    }
  }
  return ret;
}

function div(str, className) {
  if (className) {
    return `<div class="${className}">${str}</div>`;
  } else {
    return `<div>${str}</div>`;
  }
}

function json_to_div(js, opts) {
  opts = opts || {className: ''}
  if (js == null) {
    return div('', opts.className, 0);
  }

  return div(appendValues(js, ''), opts.className, 0);
}

module.exports = json_to_div;
