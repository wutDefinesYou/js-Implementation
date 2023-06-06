Array.prototype.myPush = function(...elements) {
    for (let ele of elements) {
        this[this.length] = ele
    }
    return this.length
}