import "./css/style.css";
import { fetchScores } from "./modules/interact-api";

const URL: string =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/A9GgGr2ZTgKdQScdJRGi/scores/";

fetchScores(URL)
