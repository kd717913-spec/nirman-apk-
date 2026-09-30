import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nirmaan.app',
  appName: 'Nirmaan',
  webDir: 'dist',
  server: {
    url: 'https://nirmaanv3.netlify.app/',
    cleartext: false
  }
};

export default config;
