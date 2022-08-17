import { fetchScores } from "./interact-api";


export const displayScore = async (url: string, wrapper: HTMLElement) => {
    const scores = await fetchScores(url);
    const htmlString = `
        ${!scores ? `<span>Loading....</span>` : 
        `<ul>${scores.map(score => `<li>${score.name} - ${score.score}</li>`).join("")}</ul>`}
    `

    wrapper.innerHTML = htmlString;
}