function debounce(callbackFn, delay) {
  let timerId
  return function (...args) {
    clearTimeout(timerId)
    timerId = setTimeout(() => callbackFn.apply(this, args), delay)
  }
}
