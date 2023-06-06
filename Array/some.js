Array.prototype.mySome = function(callbackFn, thisArg=this) {
    for (let index = 0; index < thisArg.length; index++) {
        if (callbackFn(thisArg[index], index, thisArg))
            return true
    }
    return false
}