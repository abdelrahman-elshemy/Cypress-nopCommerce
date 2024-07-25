const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    viewportHeight: 1000,
    viewportWidth: 1000,
  },
});
