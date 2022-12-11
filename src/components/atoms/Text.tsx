import React, { FunctionComponent, Fragment, HTMLAttributes } from 'react';
import css from 'styled-jsx/css';

const styles = css`
  /* stylelint-disable */
`;

export type TextSizeType = 'small' | 'medium' | 'large';

// Default class name for h1, h2, h3, h4
const getClassName = (type: TextSizeType = 'medium') => {
  switch (type) {
    case 'small':
      return 'text-sm font-medium text-gray-900';
  }
};

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  type?: TextSizeType;
};
const Text: FunctionComponent<TextProps> = ({
  children,
  type = 'small',
  ...props
}) => (
  <Fragment>
    <p className={getClassName(type)} {...props}>
      {children}
    </p>
    <style jsx>{styles}</style>
  </Fragment>
);

export default Text;
