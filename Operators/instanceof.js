function myInstanceof(object, constructor) {
  while (object !== null) {
    const proto = Object.getPrototypeOf(object);
    if (proto === constructor.prototype) return true;
    object = proto;
  }
  return false;
}
