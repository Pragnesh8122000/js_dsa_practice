// P0 : You are given an array of size “N”; all elements are 0 in it :) 
// You are given Q queries :-> [L,R] ; you have to add +1 to all the elements from [L,R] 

// -> After all queries are performed you have to print the final answer 

// N = 8 
// Q = {
// 1,8
// 5,8
// }

// [0 0 0 0 0 0 0 0]
// -> [1 1 1 1 1 1 1 1]
// -> [1 1 1 1 2 2 2 2]

// link: https://drive.google.com/file/d/1MAO66HyevzWQUyTFRnDVHYuZK2RRpwU1/view?usp=sharing
// docs: https://docs.google.com/document/d/11fn8ZwZ0Hr_-sdVJMMjKPHlFZAILhQ2nrd4eRSHEHDI/edit?tab=t.0

function updateArray(N, queries) {
    let prefArr = new Array(N).fill(0);
    for (let q of queries) {
        prefArr[q.left] = prefArr[q.left] + 1;
        if (q.right + 1 < N) {
            prefArr[q.right + 1] = prefArr[q.right + 1] - 1
        }
    }
    for (let num = 1; num < prefArr.length; num++) {
        prefArr[num] += prefArr[num - 1]
    }
    return prefArr
}

console.log(updateArray(4, [{ left: 0, right: 2 }, { left: 2, right: 3 }]));
console.log(updateArray(8, [{ left: 0, right: 7 }, { left: 4, right: 7 }]));