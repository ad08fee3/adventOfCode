// https://adventofcode.com/2024/day/23

import { HashSet } from "../../util/HashSet";
import { p } from "../../util/utils";

const MAX_DRAW = 9;

interface Hand {
    dice: number[];
    score: number;
}

const hands: Hand[] = [];

export function adventMain(input: string): any {
    
    const allCombos: HashSet<number[]> = new HashSet();
    // combos(['Y-d8', 'P-d8', 'P-d12', 'B-d6', 'B-d8', 'B-d12', 'S-D6', 'R-d6', 'R-d8', 'G-d20'], [], allCombos);
    combos([1,2,3,4,5,6,7,8,9,10], [], allCombos);
    // allCombos.p();
    return 0;
}

function combos(diceOptions: number[], currentSelection: number[] = [], comboSet: HashSet<number[]>): void {
    if(currentSelection.length === MAX_DRAW) {
        currentSelection.sort();
        if(!comboSet.has(currentSelection)) {
            comboSet.add(currentSelection);
            const hand: Hand = {
                dice: currentSelection,
                score: calculateScore(currentSelection),
            };
            hands.push(hand);
            p("New score:", hand, "Progress:", comboSet.size,);
            hands.sort((a: Hand, b: Hand) => {
                return b.score - a.score;
            });
            p("Best scores:", hands.slice(0, 20));
        }
    } else {
        diceOptions.forEach((opt: number) => {
            combos(diceOptions, [...currentSelection, opt], comboSet);
        });
    }
}
function calculateScore(currentSelection: number[]): number {
    let score = 3.5; // Score starts here due to default yellow d6
    // Yellow:
    score += (currentSelection.filter(d => d === 1).length * 4.5); // d8

    // Purple:
    score += (currentSelection.filter(d => d === 2).length * 9); // d8
    score += (currentSelection.filter(d => d === 3).length * 13); // d12

    // Blue:
    const containsSparkle = currentSelection.includes(7);
    let blueScore: number = 0;
    blueScore += (currentSelection.filter(d => d === 4).length * 3.5); // d6
    blueScore += (currentSelection.filter(d => d === 5).length * 4.5); // d8
    blueScore += (currentSelection.filter(d => d === 6).length * 6.5); // d12
    blueScore += (currentSelection.filter(d => d === 7).length * 3.5); // d6 (sparkle)
    score += (containsSparkle ? (blueScore + blueScore) : blueScore);

    // Red:
    const rd6: number = currentSelection.filter(d => d === 8).length;
    const rd8: number = currentSelection.filter(d => d === 9).length;
    score += (rd6 + rd8) * ((rd6 * 3.5) + (rd8 * 4.5));

    // Green:
    score += (currentSelection.filter(d => d === 10).length * 10.5);
    return score;
}

