const createAdd = (function () {
    let result = 0
    return function createAdd2 (Num){
        if (Num==='' || Num===undefined){
            return result
        }else {
            result+=Num
            return createAdd2
        }
    }
})();

console.log(createAdd(1)(1));
