import React, { FunctionComponent, ImgHTMLAttributes, Fragment } from 'react';
import css from 'styled-jsx/css';

const styles = css`
  /* stylelint-disable */
`;

type ImageShapeType = 'circle' | 'square';

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  imageShapeType?: ImageShapeType;
};

const getClassName = (imageShapeType: ImageShapeType = 'square') => {
  switch (imageShapeType) {
    case 'circle':
      return 'circle';
    case 'square':
      return 'square';
  }
};

const Image: FunctionComponent<ImageProps> = ({ imageShapeType, ...props }) => (
  <Fragment>
    <img className={getClassName(imageShapeType)} {...props} />
    <style jsx>{styles}</style>
  </Fragment>
);

export default Image;
