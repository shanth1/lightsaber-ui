interface IColors {
  primary: string;
  secondary?: string;
  text?: string;
  success?: string;
  danger?: string;
  warning?: string;
  info?: string;
}

interface IThemes {
  light: IColors;
  [key: string]: IColors;
}

export interface IDesignConfig {
  themes: IThemes;
}
