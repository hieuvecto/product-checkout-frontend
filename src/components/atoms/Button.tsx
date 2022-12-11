import React, {
  FunctionComponent,
  ButtonHTMLAttributes,
  Fragment,
} from 'react';
import css from 'styled-jsx/css';
import { doAppendClassName } from '../utils';

const styles = css`
  /* stylelint-disable */
`;

export type ButtonType =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'no-border';

const getClassName = (btnType: ButtonType, appendClassName?: string) => {
  switch (btnType) {
    case 'default':
      return doAppendClassName(
        'flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700',
        appendClassName,
      );
    case 'no-border':
      return doAppendClassName(
        'font-medium text-indigo-600 hover:text-indigo-500',
        appendClassName,
      );
  }
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  btnType?: ButtonType;
  appendClassName?: string;
};

const Button: FunctionComponent<ButtonProps> = ({
  btnType = 'default',
  appendClassName,
  children,
  ...props
}) => (
  <Fragment>
    <button className={getClassName(btnType, appendClassName)} {...props}>
      {children}
    </button>
    <style jsx>{styles}</style>
  </Fragment>
);
export default Button;
