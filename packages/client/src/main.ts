import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin, useQueryClient } from '@tanstack/vue-query'
import { createTRPCVueQueryClient } from '@falcondev-oss/trpc-vue-query';
import type { AppRouter } from 'dice-mars-server/src/server';
import { httpBatchLink } from '@trpc/client';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin);
app.use({
  install(app) {
    const queryClient = app.runWithContext(useQueryClient)
    let trpc = createTRPCVueQueryClient<AppRouter>({
      queryClient,
      trpc: {
        links: [
          httpBatchLink({
            url: 'http://localhost:8080/api/',
          }),
        ],
      },
    })
    app.provide('trpc', trpc)
  },
});

app.mount('#app')
