import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from './root';

const server = createHTTPServer({
    router: appRouter,
});

server.listen(3001);
