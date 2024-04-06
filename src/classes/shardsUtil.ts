import moment from "moment-timezone";

/**
 * Sequence of Shards pattern
 */
const shardSequence: string[] = [
'C',
'b',
'A',
'a',
'B',
'b',
'C',
'a',
'A',
'b',
'B',
'a'
]

/**
 * Sequence of realms pattern of shard
 */
const realmSequence: string[] = [
'prairie',
'forest',
'valley',
'wasteland',
'vault',
]
/**
 * @class shardsUtil
 * @classdesc A class to handle shards and realms indexing.
 */
export class ShardsUtil {
  /**
   * @method getDate - get provided date in moment
   * @param  date - date to get in moment
   */
  static getDate(date: string): moment.Moment | string {
    const timezone = "America/Los_Angeles";
    let currentDate: moment.Moment;
    try {
      if (date) {
        currentDate = moment.tz(date, "Y-MM-DD", timezone).startOf("day");
      } else {
        currentDate = moment().tz(timezone);
      }
      if (!currentDate.isValid()) {
        return "invalid";
      } else {
        return currentDate;
      }
    } catch (error) {
      console.log(error);
      return "error";
    }
  }

  /**
   * Returns shards index for a given date
   * @param date
   */
  static shardsIndex(date: moment.Moment) {
    const dayOfMonth = date.date();
    const shardIndex = (dayOfMonth - 1) % shardSequence.length;
    const currentShard = shardSequence[shardIndex];
    const realmIndex = (dayOfMonth - 1) % realmSequence.length;
    const currentRealm = realmSequence[realmIndex];

    return { currentShard, currentRealm };
  }

  /**
   * Returns suffix for a given number
   * @param number The number to get the suffix for
   */
  static getSuffix(number: number) {
    const suffixes = ["th", "st", "nd", "rd"];
    const remainder10 = number % 10;
    const remainder100 = number % 100;

    // Suffix for shards index
    return suffixes[
      remainder10 === 1 && remainder100 !== 11
        ? 1
        : remainder10 === 2 && remainder100 !== 12
          ? 2
          : remainder10 === 3 && remainder100 !== 13
            ? 3
            : 0
    ];
  }
};
