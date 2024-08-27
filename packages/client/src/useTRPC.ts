import type { AppRouter } from 'dice-mars-server/src/server';
import { createTRPCVueQueryClient } from '@falcondev-oss/trpc-vue-query'
import { inject } from 'vue';

export function useTRPC() {
  return inject('trpc') as ReturnType<typeof createTRPCVueQueryClient<AppRouter>>;
}