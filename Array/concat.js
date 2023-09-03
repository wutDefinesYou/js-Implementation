Array.prototype.myConcat = function (...value) {
  let result = [...this]
  for (let i = 0; i < value.length; i++) {
    if (Array.isArray(value[i])) result = [...result, ...value[i]]
    else result.push(value[i])
  }
  return result
}
