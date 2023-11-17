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
  light: IColors;
  [key: string]: IColors;
}

interface ITransition {
  duration: string;
  delay?: string;
  timingFunction?:
    | 'ease'
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out'
    | 'linear'
    | 'step-start'
    | 'step-end';
}

export interface IDesignConfig {
  themes?: IThemes;
  rounding?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  transition?: ITransition;
}
