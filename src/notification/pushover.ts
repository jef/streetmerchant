import {Config} from '../config';
import {Logger} from '../logger';

var Push = require( 'pushover-notifications' )

var p = new Push( {
  user: Config.notifications.pushover.user,
  token: Config.notifications.pushover.token,
})

export default function sendPushoverNotification(text: string) {
  var msg = {
    message: text
  }

  p.send( msg, function( err: Error, result: string ) {
    if ( err ) {
      Logger.error(err)
    } else {
      Logger.info(`✔ Pushover notification sent: ${result}`);
    }
  })
}
