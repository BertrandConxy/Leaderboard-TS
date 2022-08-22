import "./css/style.css";
import displayScore from "./modules/display";
import {postScore, score} from "./modules/interact-api";

const ScoreWrapper = document.getElementById('score-container') as HTMLDivElement;
const ScoreForm = document.getElementById('score-form') as HTMLFormElement;
const RefreshBtn = document.getElementById('refresh-btn') as HTMLButtonElement;
const NameInput = document.getElementById('name-input') as HTMLInputElement;


const URL: string =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/A9GgGr2ZTgKdQScdJRGi/scores/";

window.addEventListener('DOMContentLoaded', ()=> {
    displayScore(URL, ScoreWrapper);
})

RefreshBtn.addEventListener('click', ()=> {
    displayScore(URL, ScoreWrapper);
} )

ScoreForm.addEventListener('submit', async (e)=> {
    e.preventDefault();
    const Play:score = {
      user: NameInput.value,
      score: ScoreForm.score.value
    }
    await postScore(URL, Play);
    ScoreForm.reset()
} )

