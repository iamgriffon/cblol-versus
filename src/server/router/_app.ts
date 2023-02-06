import * as z from 'zod'
import { router, procedure } from '../trpc';
 
export const appRouter = router({
  hello: procedure
  .input(z.string())
  .query(({input}) => {
    return {
      text: `Hello ${input ? input : 'World'}`
    }
  })
});
 
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;