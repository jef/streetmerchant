import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {config} from '../config';

export function sendApns(link: Link, store: Store) {
  console.log("hello world");
  logger.info("send hello world");
}