const longestSubstring = (str)=>{
    const map = new Map();
    let res = 0;
    let left = 0;
    let right = str.length;
    for(let i =0;i<right;i++){
        let ch = str[i];
        if(map.has(ch)){
            left = Math.max(left, map.get(ch)+1);
        }
        map.set(str[i], i);
        res = Math.max(res, i-left+1);
    }
    return res;
}
console.log("hello");
console.log(longestSubstring("abcabcbb"));