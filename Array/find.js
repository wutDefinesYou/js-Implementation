Array.prototype.myFind = function(callbackFn, thisArg=this) {
    for (let index = 0; index < thisArg.length; index++) {
        if (callbackFn(thisArg[index], index, thisArg))
            return thisArg[index]
    }
    return undefined
}