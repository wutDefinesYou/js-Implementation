Array.prototype.myAt = function(index) {
    if (index < -this.length || index >= this.length) return undefined
    else if (index >= 0 && index < this.length) return this[index]
    else return this[index + this.length]
}
