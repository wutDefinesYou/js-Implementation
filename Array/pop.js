Array.prototype.myPop = function() {
    const element = this.at(-1)
    this.length -= 1
    return element
}