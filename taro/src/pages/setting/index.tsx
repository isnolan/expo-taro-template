import { AtDrawer } from 'taro-ui';

export default function Drawer({ show, onClose }) {
  return (
    <AtDrawer show={show} onClose={onClose}>
      {/* 抽屉内容 */}
      <p>Setting 1 </p>
      <p>Setting 2</p>
      <p>Setting 3</p>
      <p>Setting 4</p>
      <p>Setting 5</p>
    </AtDrawer>
  );
}
