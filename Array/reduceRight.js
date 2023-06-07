Array.prototype.myReduceRight = function(callbackFn, initialValue) {
    if (this.length === 0 && initialValue === undefined)
        throw new TypeError('Reduce of empty array with no initial value')

    let start
    if (initialValue === undefined) {
        start = this.length - 2
        initialValue = this.at(-1)
    } else start = this.length - 1

    for (let index = start; index >= 0; index--) {
        initialValue = callbackFn(initialValue, this[index], index, this)
    }
    return initialValue
}