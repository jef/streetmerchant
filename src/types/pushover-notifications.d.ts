declare module 'pushover-notifications' {
  export type PushoverCallback =
    | ((error: Error) => void)
    | ((error?: null, response: any) => void);

  export type Sound =
    | 'pushover'
    | 'bike'
    | 'bugle'
    | 'cashregister'
    | 'classical'
    | 'cosmic'
    | 'falling'
    | 'gamelan'
    | 'incoming'
    | 'intermission'
    | 'magic'
    | 'mechanical'
    | 'pianobar'
    | 'siren'
    | 'spacealarm'
    | 'tugboat'
    | 'alien'
    | 'climb'
    | 'persistent'
    | 'echo'
    | 'updown'
    | 'vibrate'
    | 'none';

  export interface PushoverOptions {
    token: string;
    user: string;
    httpOptions?: {proxy: string};
    onerror?: (error: Error | string) => void;
    update_sounds?: boolean;
  }

  export interface PushoverMessage {
    device?: string;
    expire?: number;
    file?: string | {name: string; data: string};
    message: string;
    priority?: number;
    retry?: number;
    sound?: string;
    timestamp?: number;
    title?: string;
    url?: string;
    url_title?: string;
  }

  export class Pushover {
    constructor(options: PushoverOptions);
    send(message: PushoverMessage, callback: PushoverCallback);
  }

  export default Pushover;
}
