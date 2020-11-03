function compareChars(arr1, arr2){
    if(arr1.length !== arr2.length)
        return 'Not Equal';
    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i])
            return 'Not Equal';
    }
    return 'Equal';
}
let arr1 = ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'];
let arr2 = ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'];
let arr3 =['3', '5', 'g', 'd'];
let arr4 =['5', '3', 'g', 'd'];

console.log(compareChars(arr1, arr2));
console.log(compareChars(arr3, arr4));