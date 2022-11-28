import { defineConfig } from 'cypress';
import task from '@cypress/code-coverage/task';
export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      task(on, config);
      return config;
    },
    includeShadowDom: true,
    defaultCommandTimeout: 30000,
  },
});
