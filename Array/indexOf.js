Array.prototype.myIndexOf = function(searchElement, fromIndex) {
    if (fromIndex >= this.length) return -1
    else if (fromIndex < -this.length || fromIndex === undefined)
        fromIndex = 0
    else if (fromIndex < 0 && fromIndex >= -this.length)
        fromIndex += this.length

    for (let index = fromIndex; index < this.length; index++) {
        if (this[index] === searchElement)
            return index
    }
    return -1
}