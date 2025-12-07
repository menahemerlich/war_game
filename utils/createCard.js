export function createCard(rank, suite) {
    let card = {}
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10"]
    card.rank = rank;
    card.suite = suite;
    if (rank === "A") {
        card.value = 14;
    } else if (rank === "K") {
        card.value = 13;
    } else if (rank === "Q") {
        card.value = 12;
    } else if (rank === "J") {
        card.value = 11;
    } else if (values.includes(rank)) {
        card.value = parseInt(rank);
    }
    return card;
}
 