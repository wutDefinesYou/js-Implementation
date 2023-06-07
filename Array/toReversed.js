Array.prototype.myToReversed = function() {
    const result = []
    for (let index = this.length - 1; index >= 0; index--) {
        result.push(this[index])
    }
    return result
}