Array.prototype.myReverse = function() {
    let left = 0,
        right = this.length - 1

    while (left < right) {
        [this[left], this[right]] = [this[right], this[left]]
        left++
        right--
    }

    return this
}