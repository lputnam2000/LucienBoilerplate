import { router, publicProcedure } from './trpc';
import { z } from 'zod';

export const postRouter = router({
    getPost: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(({ input }) => {
            return { id: input.id, title: 'Test Post', body: 'This is a test post.' };
        }),
});
