// Returns index of the number which is just greater than x and as close as possible to x.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 8;

let searchJustGreaterNumber = (arr, target) => {
    let low = 0, high = arr.length - 1;
    let ans = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] <= target) {
            low = mid + 1;
        } else {
            ans = mid;
            high = mid - 1;
        }
    }
    return arr[ans] ?? -1
}

console.log(searchJustGreaterNumber(arr, target));