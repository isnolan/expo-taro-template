export function getComponent(name) {
  if (process.env.PLATFORM === 'expo') {
    return require('react-native')[name];
  } else if (process.env.PLATFORM === 'taro') {
    return require('@tarojs/components')[name];
  }
  throw new Error('Unknown platform');
}
