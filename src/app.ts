import { envs } from './config/env';
import { Server } from './Presentation/server';

function main(): void {
  const server = new Server();

  server.start(envs.PORT);
}

main();