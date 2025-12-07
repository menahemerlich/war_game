
export function shuffle(deck){
    let count = 0;
    while (count < 1000) {
        let index1 = Math.floor(Math.random() * 51);
        let index2 = Math.floor(Math.random() * 51);
        
        if (index1 != index2) {
            let temp1 = deck[index1]
            let temp2 = deck[index2]
            deck[index1] = temp2
            deck[index2] = temp1
            count++;
            
        }
    }
    return deck
}
