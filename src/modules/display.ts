import { fetchScores } from "./interact-api";


const displayScore = async (url: string, wrapper: HTMLDivElement) => {
    const scores = await fetchScores(url) || [];
    console.log(scores)
    const htmlString = `
        ${(scores.length <= 1) ? `<span>Loading....</span>` : 
        `<ul>${scores.map(score => `<li>${score.user} - ${score.score}</li>`).join("")}</ul>`}
    `

    wrapper.innerHTML = htmlString;
}

export default displayScore;