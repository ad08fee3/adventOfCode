// https://adventofcode.com/2025/day/1

// Part 2
export function adventMain(input: string): any {
    let pointer = 50;
    const lines = input.split('\n');
    let count = 0;
    lines.forEach((line: string) => {
        const arr: string[] = line.split('');
        const tickRight: boolean = (arr.shift() === "R");
        if (pointer === 0 && !tickRight) {
            // Resetting to 100 if we're going left prevents double counting.
            pointer = 100;
        }
        const clicks: number = parseInt(arr.join(''));
        pointer += clicks * ((tickRight) ? 1 : -1);
        if (pointer >= 100 || pointer <= 0) {
            count += Math.abs(Math.floor(pointer/100)); // Count how many times we roll over.
            if (pointer <= 0 && pointer % 100 === 0) {
                count++; // If we're at -100, that means we wrapped an extra time!
            }
        }
        pointer %= 100;
        pointer = (pointer < 0) ? pointer + 100 : pointer;
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
