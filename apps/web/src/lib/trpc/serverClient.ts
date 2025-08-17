import { httpBatchLink } from '@trpc/client';
import { appRouter } from '@repo/api';

export const serverClient = appRouter.createCaller({
    links: [
        httpBatchLink({
            url: 'http://localhost:3001',
        }),
    ],
});
