import { createTRPCReact } from '@trpc/react-query';
import { httpBatchLink } from '@trpc/client';
import { type AppRouter } from '@repo/api';
import superjson from 'superjson';

export const trpc = createTRPCReact<AppRouter>({});

export const trpcClient = trpc.createClient({
    links: [
        httpBatchLink({
            url: 'http://localhost:3001',
            transformer: superjson,
        }),
    ],
});