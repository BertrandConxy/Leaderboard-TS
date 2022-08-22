export type score = {
  user: string;
  score: string;
};

type respObject = {
  result: score[];
};

export const fetchScores = async (url: string) => {
  try {
    const response: respObject = await fetch(url)
      .then((res) => res.json())
      .then((data) => data);
    const { result } = response;
    return result;
  }
   catch (errors:unknown) {
    throw new Error('Error fetching scores');
  }
};

export const postScore = async (url: string, score: score) => {
    try {
        const response: respObject = await fetch(url, {
        method: "POST",
        body: JSON.stringify(score),
        })
        .then((res) => res.json())
        .then((data) => data);
        const { result } = response;
        return result;
    } catch (errors:unknown) {
        throw new Error('Error posting score');
    }
}
