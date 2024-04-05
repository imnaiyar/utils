import moment from "moment-timezone";
import { SkyHelper, SkyEvent} from '../typings'

/**
 * @class
 * @classdesc A class to update Events details in the client constructor
 * @method update Updates the event details
 * @returns {Object}
 */

export class UpdateEvent {
  
  private client: SkyHelper;
  constructor(client: SkyHelper) {
    this.client = client;
  }

  /**
   * @param boolean Whether the event is active or not
   */
  setActive(boolean: Boolean): this {
    if (boolean === undefined || typeof boolean !== "boolean") {
      throw new TypeError("Active must be a boolean.");
    }
    this.client.skyEvents.set("event", { ...this.client.skyEvents.get("event"), eventActive: boolean });
    return this;
  }

  /**
   * @param name Name of the event
   */
  setName(name: string): this {
    if (!name || typeof name !== "string") {
      throw new TypeError("Name must be a non-empty string.");
    }
    this.client.skyEvents.set("event", { ...this.client.skyEvents.get("event"), eventName: name });
    return this;
  }

  /**
   * @param date Start date of the Event. Format DD-MM-YYYY
   * @example
   * new UpdateEvent().setDate('22-09-2023')
   */
  setStart(date: string): this {
    if (!date || typeof date !== "string") {
      throw new TypeError("Date must be a non-empty string.");
    }
    const mDate = moment.tz(date, "DD-MM-YYYY", "America/Los_Angeles").startOf("day");
    this.client.skyEvents.set("event", { ...this.client.skyEvents.get("event"), eventStarts: mDate });
    return this;
  }

  /**
   * @param date End date of the Event. Format DD-MM-YYYY
   * @example
   * new UpdateEvent().setDate('22-09-2023')
   */
  setEnd(date: string): this {
    if (!date || typeof date !== "string") {
      throw new TypeError("Date must be a non-empty string.");
    }
    const mDate = moment.tz(date, "DD-MM-YYYY", "America/Los_Angeles").endOf("day");
    this.client.skyEvents.set("event", { ...this.client.skyEvents.get("event"), eventEnds: mDate });
    return this;
  }

  /**
   * @param duration The duration of the Event.
   */
  setDuration(duration: number): this {
    if (!duration || typeof duration !== "number") {
      throw new TypeError("Duration must be a number.");
    }
    this.client.skyEvents.set("event", { ...this.client.skyEvents.get("event"), eventDuration: `${duration}` });
    return this;
  }

  /**
   * @returns The updated event
   */
  update(): SkyEvent {
    return this.client.skyEvents.get("event");
  }
}
