# Expo & Taro Template

这是一个基于 [Expo](https://starter.obytes.com/overview/) 和 [Taro](https://docs.taro.zone/docs/) 的 React Native 混合架构模板，旨在快速启动跨平台的统一项目的构建和开发架构。

# 主要特点

- Expo 用于快速开发和预览 React Native 应用。
- Taro 用于构建多端（小程序、H5）应用。
- 集成 ESLint、Prettier 和 TypeScript，用于代码格式化和静态检查。
- 提供共享的基础配置，以保证项目风格和规范统一。

# 快速开始

### 使用 Expo 初始化

```bash
npx create-react-native-app myNewApp --template expo-taro-template
```

或者使用 npm

```bash
pnpm i expo-taro-template
```

### 安装依赖

进入项目目录并运行：

```bash
pnpm i
```

### 运行项目

使用 Expo：

```bash
expo start
```

使用 Taro：

```bash
npm run dev:weapp
```

# 结构

```
.
├── expo/ # Expo 子项目
├── taro/ # Taro 子项目
├── shared/ # 共享组件和逻辑
├── .eslintrc.base.json # ESLint 基础配置
├── tsconfig.base.json # TypeScript 基础配置
└── README.md # 项目文档
```

# 文档

- Expo 文档
- Taro 文档

# 贡献

欢迎任何形式的贡献和问题反馈。

# 许可

该项目采用 MIT 许可证。
这只是一个起点，您可以根据项目的实际需求和特点进行修改和补充。希望这能帮助您快速开始项目文档的编写！如果您有更多问题或需要更多信息，请随时提问。
