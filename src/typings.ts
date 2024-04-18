import { Client, Collection } from 'discord.js';
import moment from 'moment-timezone';
import { Document } from 'mongoose'
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
  skyEvents: Collection<string, SkyEvent>
}
export interface TSData extends Document {
  name: string;
  visitDate: string;
  value: string;
  spiritImage: string;
  index: number
}