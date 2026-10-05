const subArraySumEqualsK = (arr, k) => {
    prefix = [];
    prefix[0] = arr[0];
    for(let i=1;i<arr.length;i++){
        prefix[i] = prefix[i-1]+arr[i];
    }
    let map = new Map();
    let count = 0;
    for(let i=0;i<prefix.length;i++){
        if(map.has(prefix[i]-k)){
            count = map.get(prefix[i]-k)+count;
        } else{
            map.set(prefix[i], map.get(prefix[i])?map.get(prefix[i])+1:1);
        }
    }

    return count;
}

console.log(subArraySumEqualsK([1,1,1], 2));
console.log(subArraySumEqualsK([1,2,3], 3));
console.log(subArraySumEqualsK([1,1,1], 3));

// evaluate the code with the above test cases and check if it is working as expected.
