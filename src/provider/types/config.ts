interface IColors {
  primary: string;
  secondary?: string;
  text?: string;
  success?: string;
  danger?: string;
  warning?: string;
  info?: string;
  accent?: string;
}

interface IThemes {
  [key: string]: IColors;
}

interface ITransition {
  duration: string;
  delay?: string;
  timingFunction?: string;
}

export interface IDesignConfig {
  themes?: IThemes;
  rounding?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  fontFamily?: Array<string>;
  transition?: ITransition;
}
