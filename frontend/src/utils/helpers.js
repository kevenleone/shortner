export function readProp(object, prop, defaultValue) {
  const props = (typeof prop === 'string') ? prop.split('.') : [];
  let ret = typeof object === 'object' && object !== null ? object : { };
  /**/
  if (props.length) {
    for (let i = 0; i < (props.length); i++) { //eslint-disable-line
      if (ret[props[i]] === undefined || (i < (props.length - 1) && ret[props[i]] === null)) {
        return defaultValue;
      }
      ret = ret[props[i]];
    }
    /**/
    return ret;
  }
  return defaultValue;
}

export function normalizeToArray(variable) {
  return typeof variable === 'string' ? [variable] : variable;
}
