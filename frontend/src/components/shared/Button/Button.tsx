import './Button.scss';

export enum BUTTON_TYPE {
  SUBMIT = 'submit',
  RESET = 'reset',
  BUTTON = 'button',
}

export type ButtonProps = {
  children?: string | JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
  type?: BUTTON_TYPE;
};

export const Button = ({
  children,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <button
      className='button'
      {...rest}
    >
      {children}
    </button>
  );
};
