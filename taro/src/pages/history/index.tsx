import { AtButton } from 'taro-ui';
import Taro from '@tarojs/taro';

export default function Setting() {
  return (
    <AtButton type="primary" onClick={() => Taro.navigateBack()}>
      返回首页
    </AtButton>
  );
}
