import { createCard } from "./createCard.js";

export function createDeck() {
    const deck = [];
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    const suites = ["H", "C", "D", "S"]
    for (const rank of ranks) {
        for (const suite of suites) {
            deck.push(createCard(rank, suite))
        }
    }
    return deck
}


