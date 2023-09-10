const baseConfig = require('../../babel.config.base');

module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true
    }]
  ],
  plugins: [
    ...baseConfig.plugins,
  ]
};
