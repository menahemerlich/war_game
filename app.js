import { init_game } from "./game_logic/game.js";
import { play_round } from "./game_logic/game.js";

let newGame = init_game();
while (newGame.player_1.hand.length > 0 || newGame.player_2.hand.length > 0) {
    play_round(newGame.player_1, newGame.player_2)
    play_round(newGame.player_1, newGame.player_2)
}
if (newGame.player_1.won_pile.length > newGame.player_2.won_pile.length) {
    console.log(`${newGame.player_1.name} (player_1) is teh winner`);
}else if (newGame.player_1.won_pile.length < newGame.player_2.won_pile.length) {
    console.log(`${newGame.player_2.name} (player_2) is teh winner`);
}else{
    console.log('WAR!!');
    
}