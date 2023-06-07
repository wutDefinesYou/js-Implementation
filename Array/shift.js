Array.prototype.myShift = function() {
    if (this.length === 0) return undefined

    const result = this[0]
    for (let index = 0; index < this.length - 1; index++) {
        this[index] = this[index + 1]
    }
    this.length -= 1
    return result
}