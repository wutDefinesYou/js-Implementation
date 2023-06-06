Array.prototype.myLastIndexOf = function(searchElement, fromIndex) {
    if (fromIndex < -this.length) return -1
    else if (fromIndex >= this.length || fromIndex === undefined)
        fromIndex = this.length - 1
    else if (fromIndex < 0 && fromIndex >= -this.length)
        fromIndex += this.length

    for (let index = fromIndex; index >= 0; index--) {
        if (this[index] === searchElement)
            return index
    }
    return -1
}