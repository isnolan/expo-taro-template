import type { ConfigContext, ExpoConfig } from '@expo/config';

import { ClientEnv, Env } from './env';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: Env.NAME,
  description: `${Env.NAME} Mobile App`,
  owner: Env.EXPO_ACCOUNT_OWNER,
  slug: 'chatonce',
  version: Env.VERSION.toString(),
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#2A3D4C',
  },
  updates: { fallbackToCacheTimeout: 0 },
  assetBundlePatterns: ['**/*'],
  ios: {
    usesAppleSignIn: true,
    supportsTablet: true,
    bundleIdentifier: Env.BUNDLE_ID,
    googleServicesFile: './GoogleService-Info.plist',
  },

  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#2A3D4C',
    },
    package: Env.PACKAGE,
    googleServicesFile: './google-services.json',
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: [
    '@react-native-google-signin/google-signin',
    'expo-apple-authentication',
    ['@bacons/link-assets', ['./assets/fonts/Inter.ttf']],
    'expo-localization',
    ['expo-build-properties', { android: { kotlinVersion: '1.7.22' } }],
    [
      'app-icon-badge',
      {
        enabled: true,
        badges: [
          { text: Env.APP_ENV, type: 'banner', color: 'white' },
          { text: Env.VERSION.toString(), type: 'ribbon', color: 'white' },
        ],
      },
    ],
  ],
  extra: {
    ...ClientEnv,
    eas: { projectId: Env.EAS_PROJECT_ID },
  },
});
