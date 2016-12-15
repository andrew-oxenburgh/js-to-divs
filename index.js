function appendValues(js, ret) {
  for (var prop in js) {
    if (!js.hasOwnProperty(prop)) {
      continue;
    }
    var entry = js[prop];
    if (Array.isArray(entry)) {
      ret += div(appendArray(entry, prop, ''), prop);
    } else if (typeof entry === 'object') {
      ret += div(appendValues(entry, ''), prop);
    } else {
      ret += div(entry, prop);
    }
  }
  return ret;
}

function appendArray(js, className, ret) {
  for (var off in js) {
    var entry = js[off];
    ret += div(entry, className + '-' + off);
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

function json_to_div(js) {
  if (js == null) {
    return div('');
  }

  return div(appendValues(js, ''), '', 0);
}

module.exports = json_to_div;
