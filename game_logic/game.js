import input from "analiza-sync";
import dick from "../utils/export.js"


export function create_player(Name = 'Ai') {
    let player = {'name':Name,'hand':[],'won_pile':[]}
    return player}


export function init_game(){
    let p2 = create_player()
    let p1 = create_player(input('Please enter your name: '))
    let deckShuffle = dick.createDeck()
    deckShuffle = dick.shuffle(deckShuffle)
    
    p1.hand = deckShuffle.slice(0,26)
    p2.hand = deckShuffle.slice(26,(deckShuffle.length))
    let players = {"player_1":p1,'player_2':p2,'deck':deckShuffle}
    
    return players}


export function  play_round(p1,p2){
    let p1_rotation = p1["hand"].pop()
    let p2_rotation = p2["hand"].pop()
    if( p1_rotation['value'] > p2_rotation['value']){
        p1 ['won_pile'].push (p1_rotation)
        p1 ['won_pile'].push (p2_rotation)
        console.log((`${p1['name']} winner,${JSON.stringify(p1_rotation)}`))}
    else if( p2_rotation['value'] > p1_rotation['value']){
        p2 ['won_pile'].push (p1_rotation)
        p2 ['won_pile'].push (p2_rotation)
        console.log((`${p2['name']} winner,${JSON.stringify(p2_rotation)}`))}
    else{
         console.log((`draw ${JSON.stringify(p2_rotation)}`))}}
    



