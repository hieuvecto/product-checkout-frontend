import BigNumber from 'bignumber.js';
import React, { FunctionComponent, Fragment } from 'react';
import { Item, PricingRule, PricingRuleType } from 'src/types';
import css from 'styled-jsx/css';
import Text from '../atoms/Text';
import UsdPrice from '../atoms/UsdPrice';

const styles = css`
  /* stylelint-disable */
`;

export type PricingRuleDetailProps = {
  item: Pick<Item, 'title'>;
  pricingRule: Pick<
    PricingRule,
    'type' | 'fromQuantity' | 'toQuantity' | 'discountPrice'
  >;
};

const PricingRuleDetail: FunctionComponent<PricingRuleDetailProps> = ({
  item,
  pricingRule,
}) => {
  return (
    <Fragment>
      {pricingRule.type === PricingRuleType.deal && (
        <Text className="mt-0.5 text-sm text-gray-500">
          {`Gets a ${pricingRule.fromQuantity} for ${pricingRule.toQuantity} deal
          for ${item.title}`}
        </Text>
      )}
      {pricingRule.type === PricingRuleType.discount && (
        <Text className="mt-0.5 text-sm text-gray-500">
          {`Gets a discount on ${item.title}, retail price drops to: `}
          <UsdPrice price={pricingRule.discountPrice as BigNumber} />
        </Text>
      )}
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default PricingRuleDetail;
