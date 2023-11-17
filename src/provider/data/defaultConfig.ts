import { IDesignConfig } from '../types/config';

export const defaultConfig: IDesignConfig = {
  themes: {
    light: {
      primary: '#a8dadc',
      secondary: '#f1faee',
      text: 'black',
      success: '#62D12B',
      info: '#38B6FF',
      warning: '#FFB349',
      danger: '#FF4635',
    },
    dark: {
      primary: '#003049',
      secondary: '#335c67',
      text: 'white',
      success: '#62D12B',
      info: '#38B6FF',
      warning: '#FFB349',
      danger: '#FF4635',
    },
  },
  fontFamily: [
    'Inter',
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'system-ui',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji',
  ],
  rounding: 'none',
  transition: { duration: '0s' },
};
