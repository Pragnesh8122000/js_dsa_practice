// Given 5 arrays :- A,B,C,D,E  all of size “N” 

// Element in the array can range from [-10^9……….10^9]

// Find the number of tuplets (i,j,k,l,m) such that  - 

// a[i] + b[j] + c[k] + d[l] + e[m] = 0

// A = [2 5]
// B = [3 8]
// C = [-5 8]
// D = [5 10]
// E = [-10 100] 

// Output - 1 (2,5,-5,10,-10) 

// Observation : 
// Create hashmap for sum of two arrays and then check for the other three arrays, 
// if their negative sum exists in the hashmap or not.

let A = [2, 5]
let B = [3, 8]
let C = [-5, 8]
let D = [5, 10]
let E = [-10, 100]
let n = 2;

let sumMap = new Map();
for (let i =0; i < n; i++){
    for (let j =0; j < n; j++){
        let sum =A[i]+B[j];
        sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
    }   
}

let count = 0;
for (let k = 0; k < n; k++) {
    for (let l = 0; l < n; l++) {
        for (let m = 0; m < n; m++) {
            let sum = -(C[k] + D[l] + E[m]);
            if(sumMap.has(sum)){
                count += sumMap.get(sum);
            }
        }   
    }   
}
console.log(count)