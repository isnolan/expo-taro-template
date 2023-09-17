import ar from '@/translations/ar.json';
import en from '@/translations/en.json';
import zhCN from '@/translations/zh-cn.json';

export const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
  zhCN: {
    translation: zhCN,
  },
};

export type Language = keyof typeof resources;
