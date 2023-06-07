Array.prototype.myFindLast = function(callbackFn, thisArg=this) {
    for (let index = thisArg.length - 1; index >= 0; index--) {
        if (callbackFn(thisArg[index], index, thisArg))
            return thisArg[index]
    }
    return undefined
}