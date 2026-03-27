let restartBotHandler: (() => Promise<void>) | undefined;

export function setRestartBotHandler(handler: () => Promise<void>) {
  restartBotHandler = handler;
}

export async function restartBot() {
  if (!restartBotHandler) {
    throw new Error('Restart handler has not been initialized');
  }

  await restartBotHandler();
}
