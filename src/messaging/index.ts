export * from './captcha';
export * from './notification';

export type DMPayloadType = 'text' | 'image';

export interface DMPayload {
  content: string; // for image type, content is local file path
  type: DMPayloadType;
}
