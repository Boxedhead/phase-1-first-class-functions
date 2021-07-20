function receivesAFunction(callBack) {
    return callBack()
}

function returnsANamedFunction(namedFuncion) {
 return function namedFuncion() {

 }
} 

function returnsAnAnonymousFunction () {
    return function () {
    }
}