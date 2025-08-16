import { router, publicProcedure } from './trpc';
import { z } from 'zod';

export const userRouter = router({
    getUser: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(({ input }) => {
            return { id: input.id, name: 'Test User' };
        }),
});
