import {play} from './modules/rock-paper-scissors.js';
import {ROCK, PAPER, SCISSORS, rockBtn, paperBtn, scissorsBtn} from './modules/const.js';

rockBtn.addEventListener("click", () => {
    play(ROCK);
});
paperBtn.addEventListener("click", () => {
    play(PAPER);
});
scissorsBtn.addEventListener("click", () => {
    play(SCISSORS);
});