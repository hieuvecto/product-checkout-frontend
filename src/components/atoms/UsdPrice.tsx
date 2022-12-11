import BigNumber from 'bignumber.js';
import React, { FunctionComponent, Fragment } from 'react';
import css from 'styled-jsx/css';
const styles = css`
  /* stylelint-disable */
`;
export enum PriceUnit {
  CENT = 'cent',
  DOLLAR = 'dollar',
}

export type UsdPriceProps = {
  price: BigNumber | string;
  type?: PriceUnit;
};

const UsdPrice: FunctionComponent<UsdPriceProps> = ({
  price,
  type = PriceUnit.CENT,
}) => {
  return (
    <Fragment>
      <span>&#36;</span>
      {type === PriceUnit.CENT && (
        <span>{new BigNumber(price).dividedBy(100).toFormat(2)}</span>
      )}
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default UsdPrice;
