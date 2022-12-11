import React, { FunctionComponent, Fragment, HTMLAttributes } from 'react';
import css from 'styled-jsx/css';

const styles = css`
  /* stylelint-disable */
`;

export type TitleType = 'h1' | 'h2' | 'h3' | 'h4';

// Default class name for h1, h2, h3, h4
const getClassName = (type: TitleType = 'h2') => {
  switch (type) {
    case 'h2':
      return 'text-lg font-medium text-gray-900';
    case 'h3':
      return 'text-sm text-gray-900';
  }
};

export type TitleProps = HTMLAttributes<HTMLElement> & { type?: TitleType };

const Title: FunctionComponent<TitleProps> = ({
  children,
  type = 'h2',
  ...props
}) => {
  return (
    <Fragment>
      {type === 'h1' && (
        <h1 className={getClassName(type)} {...props}>
          {children}
        </h1>
      )}
      {type === 'h2' && (
        <h2 className={getClassName(type)} {...props}>
          {children}
        </h2>
      )}
      {type === 'h3' && (
        <h3 className={getClassName(type)} {...props}>
          {children}
        </h3>
      )}
      {type === 'h4' && (
        <h4 className={getClassName(type)} {...props}>
          {children}
        </h4>
      )}
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default Title;
