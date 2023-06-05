Array.prototype.myFilter = function(callbackFn, thisArg = this) {
    const result = []
    for (let index = 0; index < thisArg.length; index++) {
        if (callbackFn(thisArg[index], index, thisArg))
            result.push(thisArg[index])
    }
    return result
}