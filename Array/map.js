Array.prototype.myMap = function(callbackFn, thisArg=this) {
    const result = []
    for (let index = 0; index < thisArg.length; index++) {
        result.push(callbackFn(thisArg[index], index, thisArg))
    }
    return result
}