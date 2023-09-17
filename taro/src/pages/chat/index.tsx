import { useState } from 'react';
import Taro from '@tarojs/taro';
import { AtButton, AtNavBar, AtDrawer } from 'taro-ui';
import { View, Text, Button } from '@tarojs/components';

import 'taro-ui/dist/style/components/button.scss'; // 按需引入
import './index.scss';

import Setting from '../setting';

const Navbar = ({ onClickSetting, onClickHistory }) => {
  return (
    <AtNavBar
      onClickLeftIcon={onClickSetting}
      onClickRgIconSt={onClickHistory}
      color="#000"
      leftIconType="bullet-list"
      rightFirstIconType="message"
    >
      <View>Chat Once</View>
    </AtNavBar>
  );
};

export default function Home() {
  const [isShowSetting, setSetting] = useState(false);

  const openHistory = () => {
    Taro.navigateTo({ url: '/pages/history/index' });
  };

  return (
    <View>
      <Navbar onClickSetting={() => setSetting(true)} onClickHistory={openHistory} />
      <Setting show={isShowSetting} onClose={() => setSetting(false)} />
      {/* 主页面内容 */}
      <p>这是首页</p>
    </View>
  );
}
