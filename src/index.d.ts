import { type ChatInputCommandInteraction } from 'discord.js'
import { type Field} from './utils/buildTimesHTML'
import { parsePerms } from './utils/parsePerms'
export * from './typings'

/**
 * Posts a given code to Hastebin and returns it URL
 */
export declare function postToHaste(code: any): string;


/**
 * Returns html code for a given timestamp interaction
 */
export declare function buildTimesHTML(interaction: ChatInputCommandInteraction, fieldsData: Field[], offset: string, providedTime: string ): string;


export type parsePerms = typeof parsePerms;