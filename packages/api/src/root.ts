import { router } from './trpc/trpc';
import { userRouter } from './trpc/user';
import { postRouter } from './trpc/post';

export const appRouter = router({
    user: userRouter,
    post: postRouter,
});

export type AppRouter = typeof appRouter;
