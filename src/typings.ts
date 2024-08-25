import { Client, Collection } from "discord.js";
import moment from "moment-timezone";
import { Document } from "mongoose";
export interface userData {
  top: Number;
  avatar: string;
  tag: string;
  score: number;
  games: number;
}
export interface colorsType {
  box: string;
  username: string;
  score: string;
  firstRank: string;
  secondRank: string;
  thirdRank: string;
}
export interface quizOptions {
  usersData: userData[];
  colors: colorsType;
}

export interface Background {
  type: string;
  background: string;
}

export interface SkyEvent {
  eventActive: Boolean;
  eventName: string;
  eventStarts: moment.Moment;
  eventEnds: moment.Moment;
  eventDuration: string;
}
export interface SkyHelper extends Client {
  skyEvents: Collection<string, SkyEvent>;
}
export interface TSData extends Document {
  name: string;
  visitDate: string;
  value: string;
  spiritImage: string;
  index: number;
}
export interface SpecialEventData extends Document {
  startDate: string;
  endDate: string;
  name: string;
}

export interface ShardsCountdown {
  // The shard index
  index: number;

  // Whether if the shard is ready
  active?: boolean;

  // Whether if all shards are ended for the given date
  ended?: boolean;

  // The landing time for the given shard
  start: moment.Moment;

  // THe end time for the given shard
  end: moment.Moment;

  // THe countdown for the shard end/land
  duration: string;
}
