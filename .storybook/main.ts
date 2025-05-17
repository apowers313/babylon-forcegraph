import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook"
  ],
  "framework": {
    "name": "@storybook/html-vite",
    "options": {}
  },
  "core": {
    "disableTelemetry": true
  }
};
export default config;
