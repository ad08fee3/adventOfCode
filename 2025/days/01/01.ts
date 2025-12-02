// https://adventofcode.com/2025/day/1

// Part 2
export function adventMain(input: string): any {
    const lines = input.split('\n');
    let pointer = 50;
    let count = 0;
    lines.forEach((line: string) => {
        let clicks: number = parseInt(line.slice(1));
        while(clicks-- > 0) {
            if (pointer === 0) {
                count++;
            }
            pointer += (((line.charAt(0) === "R")) ? 1 : -1);
            pointer %= 100;
            pointer = (pointer < 0) ? pointer + 100 : pointer;
        }
    });
    return count;
}

// Part 1
// export function adventMain(input: string): any {
//     let pointer = 50;
//     const lines = input.split('\n');
//     let count = 0;
//     lines.forEach((line: string) => {
//         const arr: string[] = line.split('');
//         const tickRight: boolean = (arr.shift() === "R");
//         const clicks: number = parseInt(arr.join(''));
//         // Numbered 0-99; no 100.
//         // The actual password is the number of times the dial is left pointing at 0 after any rotation in the sequence.
//         pointer += (tickRight) ? clicks : (-1 * clicks);
//         pointer %= 100;
//         if (pointer === 0) {
//             count++;
//         }
//     });
//     return count;
// }
