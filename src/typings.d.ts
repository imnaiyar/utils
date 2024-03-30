export interface userData {
  top: Number,
  avatar: string,
  tag: string,
  score: number,
  games: number
}
export interface colorsType {
    box: string,
    username: string,
    score: string,
    firstRank: string,
    secondRank: string,
    thirdRank: string
  }
export interface quizOptions {
  usersData: userData[],
  colors: colorsType
}

export interface Background {
  type: string;
  background: string;
}