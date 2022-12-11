import Link, { LinkProps } from 'next/link';
import React, {
  FunctionComponent,
  Fragment,
  AnchorHTMLAttributes,
} from 'react';
import css from 'styled-jsx/css';

const styles = css`
  /* stylelint-disable */
`;

export type ButtonLinkype = 'default' | 'primary' | 'secondary' | 'outline';

const getClassName = (type: ButtonLinkype) => {
  switch (type) {
    case 'default':
      return 'flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700';
  }
};

export type ButtonLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    type?: ButtonLinkype;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  };

const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
  type = 'default',
  onClick,
  children,
  ...props
}) => {
  const nextLinkProps = props as LinkProps;
  const anchorLinkProps = props as Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'href'
  >;

  return (
    <Fragment>
      <Link {...nextLinkProps} passHref>
        <a
          className={getClassName(type)}
          {...anchorLinkProps}
          onClick={onClick}
        >
          {children}
        </a>
      </Link>
      <style jsx>{styles}</style>
    </Fragment>
  );
};
export default ButtonLink;
