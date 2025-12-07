
export function compareCards(p1Card, p2Card) { 
    if (p1Card.value > p2Card.value) {
        return 'p1'
    }else if (p2Card.value > p1Card.value) {
        return 'p2'
    }else{
        return 'WAR'
    }
}