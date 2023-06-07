Array.prototype.myFindIndex = function(callbackFn, thisArg=this) {
    for (let index = 0; index < thisArg.length; index++) {
        if (callbackFn(thisArg[index], index, thisArg))
            return index
    }
    return -1
}

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.myFindIndex(isLargeNumber));
// Expected output: 3