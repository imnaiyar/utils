import { Client, Collection } from 'discord.js'
import moment from 'moment-timezone'
export { Permission } from './utils/parsePerms'
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

export interface SkyEvent {
  eventActive: Boolean,
  eventName: string,
  eventStarts: moment.Moment,
  eventEnds: moment.Moment,
  eventDuration: string
}
export interface SkyHelper extends Client {
  ts: {
      name: string,
      visitDate: string,
      departDate: string,
      value: string,
      spiritImage: string,
      index: Number
  },
  skyEvents: Collection<string, SkyEvent>
}