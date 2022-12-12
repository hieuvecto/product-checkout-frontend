import BigNumber from 'bignumber.js';
import React, { FunctionComponent, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { removeItemFromShoppingCart } from 'src/ducks/checkouts/checkouts.operations';
import { CheckoutItem, Item } from 'src/types';
import css from 'styled-jsx/css';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import Title from '../atoms/Title';
import UsdPrice from '../atoms/UsdPrice';
import ShoppingCartListItem from '../molecules/ShoppingCartListItem';

const styles = css`
  /* stylelint-disable */
`;

export type ShoppingCartFormProps = {
  checkoutItems: (Pick<CheckoutItem, 'quantity'> & {
    item?: Pick<
      Item,
      'id' | 'title' | 'description' | 'price' | 'thumbnailUrl'
    >;
  })[];
  subTotalValue: BigNumber | string;
  totalValue: BigNumber | string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

const ShoppingCartForm: FunctionComponent<ShoppingCartFormProps> = ({
  checkoutItems,
  subTotalValue,
  totalValue,
  onSubmit,
}) => {
  const dispatch = useDispatch();

  const handleClickRemove = (item: Item) => {
    removeItemFromShoppingCart(dispatch, item);
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div
          className="relative z-10"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <Title type="h2">Shopping Cart</Title>
              </div>
              <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {checkoutItems.map((checkoutItem, index) => (
                      <ShoppingCartListItem
                        key={index}
                        checkoutItem={checkoutItem}
                        onClickRemove={() =>
                          handleClickRemove(checkoutItem.item as Item)
                        }
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <Text>Sub Total</Text>
                <Text>
                  <UsdPrice price={subTotalValue} />
                </Text>
              </div>
              <div className="mt-2 flex justify-between text-base font-medium text-gray-900">
                <Text>Total</Text>
                <Text>
                  <UsdPrice price={totalValue} />
                </Text>
              </div>
              <Text className="mt-0.5 text-sm text-gray-500">
                taxes and discounts calculated at checkout.
              </Text>
              <div className="mt-6">
                <Button type="submit" appendClassName="w-full">
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default ShoppingCartForm;
