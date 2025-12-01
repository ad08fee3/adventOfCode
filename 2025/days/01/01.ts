// https://adventofcode.com/2025/day/1

export function adventMain(input: string): any {
    let pointer = 50;
    const lines = input.split('\n');
    let count = 0;
    lines.forEach((line: string) => {
        const arr: string[] = line.split('');
        const tickRight: boolean = (arr.shift() === "R");
        const clicks: number = parseInt(arr.join(''));
        // Numbered 0-99; no 100.
        // The actual password is the number of times the dial is left pointing at 0 after any rotation in the sequence.
        pointer += (tickRight) ? clicks : (-1 * clicks);
        pointer %= 100;
        if (pointer === 0) {
            count++;
        }
    });
    return count;
}
