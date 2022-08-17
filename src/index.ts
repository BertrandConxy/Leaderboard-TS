import "./css/style.css";
import displayScore from "./modules/display";
// import {postScore} from "./modules/interact-api";

const ScoreWrapper = document.getElementById('score-container') as HTMLDivElement;
// const ScoreForm = document.getElementById('score-form') as HTMLFormElement;


const URL: string =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/A9GgGr2ZTgKdQScdJRGi/scores/";

window.addEventListener('DOMContentLoaded', ()=> {
    displayScore(URL, ScoreWrapper);
})

