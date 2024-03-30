interface userData {
  top: Number,
  avatar: string,
  tag: string,
  score: number,
  games: number
}
interface colorsType {
    box: string,
    username: string,
    score: string,
    firstRank: string,
    secondRank: string,
    thirdRank: string
  }
interface quizOptions {
  usersData: userData[],
  colors: colorsType
}