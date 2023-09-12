import React from 'react';
import { getComponent } from '../';
const Text = getComponent('Text');

const SplashScreen = () => {
  return (
    <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Expo & Taro Template!</Text>
    </div>
  );
};

export default SplashScreen;
