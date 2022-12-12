import BigNumber from 'bignumber.js';
import React, { FunctionComponent, Fragment } from 'react';
import { CheckoutItem, Item } from 'src/types';
import css from 'styled-jsx/css';
import Button from '../atoms/Button';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import TextLink from '../atoms/TextLink';
import Title from '../atoms/Title';
import UsdPrice from '../atoms/UsdPrice';

const styles = css`
  /* stylelint-disable */
`;

export type ShoppingCartListItemProps = {
  checkoutItem: Pick<CheckoutItem, 'quantity'> & {
    item?: Pick<Item, 'title' | 'description' | 'price' | 'thumbnailUrl'>;
  };
  onClickRemove?: () => void;
};

const ShoppingCartListItem: FunctionComponent<ShoppingCartListItemProps> = ({
  checkoutItem,
  onClickRemove,
}) => {
  return (
    <Fragment>
      <li className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <Image
            src={checkoutItem.item?.thumbnailUrl}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <Title type="h3">
                <TextLink href="#">{checkoutItem.item?.title}</TextLink>
              </Title>
              <Text className="ml-4">
                <UsdPrice
                  price={
                    checkoutItem.item?.price
                      ? new BigNumber(checkoutItem.item?.price).multipliedBy(
                          checkoutItem.quantity,
                        )
                      : '0'
                  }
                />
              </Text>
            </div>
            <Text className="mt-1 text-sm text-gray-500">
              {checkoutItem.item?.description}
            </Text>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <Text className="text-gray-500">{`Qty ${checkoutItem.quantity}`}</Text>
            <div className="flex">
              <Button btnType="no-border" onClick={onClickRemove}>
                Remove
              </Button>
            </div>
          </div>
        </div>
      </li>
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default ShoppingCartListItem;
