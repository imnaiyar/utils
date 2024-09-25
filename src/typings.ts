import { Client, Collection } from "discord.js";
import moment from "moment-timezone";
import { Document } from "mongoose";
export interface userData {
  /** The position of the player in the leaderboard */
  top: Number;

  /** The Avatar of the player */
  avatar: string;

  /** The username of the player */
  tag: string;

  /** The score of the player */
  score: number;

  /** Number of the games played by the user */
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
export interface LeaderboardOptions {
  usersData: userData[];
  colors?: colorsType;
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
