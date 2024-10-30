import net from 'node:net';
import { config } from './config/config';
import { onConnection } from './events/onConnection';

const server = net.createServer(onConnection);

server.listen(config.server.port, config.server.host, 10, () => {
  console.log(`Server running: ${JSON.stringify(server.address())}`);
});
