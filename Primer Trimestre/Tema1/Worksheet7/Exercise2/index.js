function addOnlyNums(...myArray){
    let result = 0;
    for (number of myArray){
        if (typeof number == 'number'){
            result += number
        }
    }
    return result
}

console.log(addOnlyNums(1, 'cat', 3, 4));