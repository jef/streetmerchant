import {Link, Store} from '../store/model';

type RequestFailed = {
  failureReason: 'request_failed';
  statusCode: number;
};
type Captcha = {failureReason: 'captcha'};
type MaxPriceExceeded = {failureReason: 'max_price'; maxPrice: number};
type OutOfStock = {failureReason: 'out_of_stock'};
type BannedSeller = {failureReason: 'banned_seller'};
type LinkPollError = {result: 'failure'} & (
  | RequestFailed
  | Captcha
  | MaxPriceExceeded
  | OutOfStock
  | BannedSeller
);
type LinkPollSuccess = {result: 'in_stock'};

export type LinkPollEvent = (LinkPollError | LinkPollSuccess) & {
  link: Link;
  store: Store;
};
