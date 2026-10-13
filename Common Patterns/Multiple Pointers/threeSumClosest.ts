class ThreeSumClosest {

    arr: number[] = [];
    target: number;

    constructor(arr: number[], target: number) {
        this.arr = arr;
        this.target = target;
    }
    
    threeSumClosest() {
        const numbers = [...this.arr].sort((a, b) => a - b);
        let closest = numbers[0] + numbers[1] + numbers[2];
        let n = numbers.length;
        // fix i, then run two pointers, one from left and one from right
        for (let i = 0; i < n - 2; i++) {
            let left = i + 1;
            let right = n - 1;

            while (left < right) {
                const temp = numbers[i] + numbers[left] + numbers[right];
                if (Math.abs(temp - this.target) < Math.abs(closest - this.target)) {
                    closest = temp;
                }

                if (temp < this.target) {
                    left++;
                } else if (temp > this.target) {
                    right--;
                } else {
                    return temp;
                }
            }
        }

        return closest;
    }
}

function main() {
    const arr = [-1, 2, 1, -4];
    const target = 1;
    const threeSumClosest = new ThreeSumClosest(arr, target);
    console.log(threeSumClosest.threeSumClosest());
}

main();