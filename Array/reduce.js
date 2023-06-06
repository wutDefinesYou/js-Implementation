Array.prototype.myReduce = function(callbackFn, initialValue) {
    if (this.length === 0 && initialValue === undefined)
        throw new TypeError('Reduce of empty array with no initial value')

    let start
    if (initialValue === undefined) {
        start = 1
        initialValue = this[0]
    } else start = 0

    for (let index = start; index < this.length; index++) {
        initialValue = callbackFn(initialValue, this[index], index, this)
    }
    return initialValue
}