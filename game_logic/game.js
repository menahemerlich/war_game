import input from "analiza-sync";
import {deck} from "../utils/export.js"


function create_player(Name ='Ai') {
    let player={'name':Name,'hand':[],'won_pile':[]}
    return player}


function init_game(){
    let p2=create_player()
    let p1=create_player(input('Please enter your name'))
    let deck1=deck.create_deck()
    deck1=deck.shuffle(deck1)
    for(let i =0;i<52;i++){
        if (i < 26){
           p1['hand'].push(deck1[i])}
        else{
            p2['hand'].push(deck1[i])}}
    players={"player_1":p1,'player_2':p2,'deck':deck1}

    return players}


function  play_round(p1,p2){
    let p1_rotation = p1["hand"].pop()
    let p2_rotation = p2["hand"].pop()
    if( p1_rotation['value'] > p2_rotation['value']){
        p1['won_pile'].push (p1_rotation)
        p1['won_pile'].push (p2_rotation)
        console.log((p1['name'],'winner',p1_rotation))}
    else if( p2_rotation['value'] > p1_rotation['value']){
        p2['won_pile'].push(p1_rotation)
        p2['won_pile'].push(p2_rotation)
        console.log((p2['name'],'winner',p2_rotation))}
    else{
         console.log(('draw',p1_rotation))}}

let exporting=[create_player,init_game,play_round]

export{exporting}
