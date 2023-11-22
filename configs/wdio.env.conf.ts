import * as dotenv from 'dotenv';
import merge from 'deepmerge';
import { config } from './wdio.conf';

// Load the .env file
dotenv.config();
const testDataPath = './src/assets/';

exports.config = merge(config, {
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: './src/tsconfig.json',
      transpileOnly: true
    }
  },

  // ============
  // Capabilities
  // ============
  maxInstances: Number(process.env.NUM_BROWSERS),
  // capabilities can be found in the `wdio.local.chrome.conf.ts` or `wdio.saucelabs.conf.ts`
  capabilities: [],
  // ===================
  // Test Configurations
  // ===================
  logLevel: 'info',
  bail: 0,
  baseUrl: process.env.BASE_URL,
  // Default timeout for all waitFor* commands.
  waitforTimeout: Number(process.env.WAIT_FOR_TIME_OUT),

  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: Number(process.env.CONNECTION_RETRY_TIME_OUT),

  // Default request retries count
  connectionRetryCount: Number(process.env.CONNECTION_RETRY_COUNT),
  
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60 * 1000,
  },

  // ========
  // Services
  // ========
  services: [],
});