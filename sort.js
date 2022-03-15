function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function selectionSort(arr) {
    let minSeqIdx;
    let minIdx
    let found = false
    let prev = Math.min(...arr)-1

    for (let i = 0; i < arr.length - 1; i++) {

        minSeqIdx = i;
        minIdx = i;

        found = false
        for (let bp = i; bp < arr.length; bp++) {

            let ap = arr[minSeqIdx]
            let a = arr[minIdx]

            let b = arr[bp]

            // для нахождение минимального значения если последовательность закончилась
            if ( a > b ) minIdx = bp

            // для нахождения чисел в последовательности
            if (ap === b && ap > prev) {
                found = true
            } else if ( ( ap > b && b > prev ) || ( ap <= prev && b > prev) ) {
                minSeqIdx = bp
                found = true
            }

        }
        if ( !found ) {
            console.log('no found')
            minSeqIdx = minIdx
            found = false
        }
        prev = arr[minSeqIdx];
        if (i !== minSeqIdx) swap(arr, i, minSeqIdx);
    }
    return arr;
}

let t = [3, 6, 1, 2, 5, 2, 9, 3, 3, 2, 1, 1, 0, -3, 2000, 2000, -4, -3];

console.log(selectionSort(t));
