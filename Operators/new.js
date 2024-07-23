function myNew(constructor, ...args) {
  const newInstance = {};
  Object.setPrototypeOf(newInstance, constructor.prototype);
  const result = constructor.call(newInstance, ...args);
  if (Object.prototype.toString.call(result) === "[object Object]")
    return result;
  return newInstance;
}
