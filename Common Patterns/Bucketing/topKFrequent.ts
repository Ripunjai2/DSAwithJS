class TopKFrequent {
    nums: number[];
    k: number;
    constructor(numbers: number[], k: number) {
        this.nums = numbers;
        this.k = k
    }

    topKFrequent(): number[] {
        const freq = new Map<number, number>();
        const bucket: number[][] = [];
        const res: number[] = [];
        for(let num of this.nums){
            freq.set(num, (freq.get(num) ?? 0) + 1)
        }

        for (const [num, count] of freq.entries()) {
            if (!bucket[count]) {
                bucket[count] = [];
            }
            bucket[count].push(num);
        }
        let temp = this.k;
        let length = this.nums.length-1;
        while(temp){
            if(bucket[length]){
                for(let i = 0; i<bucket[length].length;i++){
                    if(temp>0){
                        res.push(bucket[length][i]);
                        temp--;
                    }
                }
            }
            length--;
        }

        return res;
    }
}

const main = ()=>{
    const tkf = new TopKFrequent([1,1,2,2,3,3,4], 2);
    console.log(tkf.topKFrequent());
}

main();