declare module 'play-sound' {
  export interface Options {
    players?: string[];
    player?: string;
  }

  export type PlayOptions = Record<string, any>;

  export interface PlaySound {
    player: string;

    play: ((file: string, callback: (error: Error) => void) => PlayerProcess) &
      ((
        file: string,
        options: PlayOptions,
        callback: (error: Error) => void
      ) => PlayerProcess);
  }

  export interface PlayerProcess {
    kill: () => void;
  }

  export default function (options?: Options): PlaySound;
}
