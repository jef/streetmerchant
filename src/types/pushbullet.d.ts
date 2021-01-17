declare module '@jef/pushbullet' {
  export type DeviceParameters = string | number | Record<string, any>;

  export type PushBulletCallback =
    | ((error: Error) => void)
    | ((error?: null, response: any) => void);

  export interface ListOptions {
    active?: boolean;
    cursor?: string;
    limit?: number;
  }

  export interface HistoryOptions extends ListOptions {
    modified_after?: number;
  }

  export interface PushBulletStream {
    connect: () => void;
    close: () => void;
    on: ((event: 'connect' | 'close' | 'nop', callback: () => void) => void) &
      ((event: 'error', callback: (error: any) => void) => void) &
      ((event: 'message', callback: (message: any) => void) => void) &
      ((event: 'tickle', callback: (tickle: any) => void) => void) &
      ((event: 'push', callback: (push: any) => void) => void);
  }

  export class PushBullet {
    constructor(apiKey: string, options?: {fullResponses: boolean}): this;
    me(callback: PushBulletCallback);
    devices(options: ListOptions, callback: PushBulletCallback);
    devices(callback: PushBulletCallback);
    createDevice(options: Record<string, any>, callback: PushBulletCallback);
    updateDevice(
      deviceIden: string,
      deviceOptions: Record<string, any>,
      callback: PushBulletCallback
    );
    deleteDevice(deviceIden: string, callback: PushBulletCallback);
    note(
      deviceParameters: DeviceParameters,
      title: string,
      body: string,
      callback: PushBulletCallback
    );
    link(
      deviceParameters: DeviceParameters,
      name: string,
      url: string,
      body: string,
      callback: PushBulletCallback
    );
    file(
      deviceParameters: DeviceParameters,
      filePath: string,
      message: string,
      callback: PushBulletCallback
    );
    dismissPush(pushIden: DeviceParameters, callback: PushBulletCallback);
    deletePush(pushIden: DeviceParameters, callback: PushBulletCallback);
    deleteAllPushes(callback: PushBulletCallback);
    history(options: HistoryOptions, callback: PushBulletCallback);
    history(callback: PushBulletCallback);
    subscriptions(options: ListOptions, callback: PushBulletCallback);
    subscriptions(callback: PushBulletCallback);
    subscribe(channelTag: string, callback: PushBulletCallback);
    unsubscribe(subscriptionIden: string, callback: PushBulletCallback);
    muteSubscription(subscriptionIden: string, callback: PushBulletCallback);
    unmuteSubscription(subscriptionIden: string, callback: PushBulletCallback);
    channelInfo(channelTag: string, callback: PushBulletCallback);
    chats(options: ListOptions, callback: PushBulletCallback);
    chats(callback: PushBulletCallback);
    createChat(email: string, callback: PushBulletCallback);
    deleteChat(chatIden: string, callback: PushBulletCallback);
    muteChat(chatIden: string, callback: PushBulletCallback);
    unmuteChat(chatIden: string, callback: PushBulletCallback);
    sendSMS(options: Record<string, any>, callback: PushBulletCallback);
    sendClipboard(options: Record<string, any>, callback: PushBulletCallback);
    dismissEphemeral(
      options: Record<string, any>,
      callback: PushBulletCallback
    );
    stream(): PushBulletStream;
    enableEncryption(
      encryptionPassword: string,
      userIden: string
    ): PushBulletStream;
  }

  export default PushBullet;
}
