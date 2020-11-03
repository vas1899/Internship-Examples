let arr1 = [12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3];
let arr2 = [5, 4, 3, 2, 1];
let arr3 = [3, 74, -1, -22, 1, 0, 17];

function sortArray(arr){
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minValueIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if(arr[j] < arr[minValueIndex])
                minValueIndex = j;        
        }
        let temp = arr[i];
        arr[i] = arr[minValueIndex];
        arr[minValueIndex] = temp;
    }

    arr.forEach(i => {
        console.log(i);
    });
    console.log('');
}

sortArray(arr1); 
sortArray(arr2);
sortArray(arr3);