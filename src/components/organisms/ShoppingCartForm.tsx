import React, { FunctionComponent, Fragment } from 'react';
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
    item?: Pick<Item, 'title' | 'description' | 'price' | 'thumbnailUrl'>;
  })[];
  subtotal: string;
  onSubmit: () => void;
};

const ShoppingCartForm: FunctionComponent<ShoppingCartFormProps> = ({
  checkoutItems,
  subtotal,
  onSubmit,
}) => {
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div
          className="relative z-10"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Title type="h2">Shopping Cart</Title>
                      </div>
                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {checkoutItems.map((checkoutItem, index) => (
                              <ShoppingCartListItem
                                key={index}
                                checkoutItem={checkoutItem}
                              />
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <Text>Subtotal</Text>
                        <Text>
                          <UsdPrice price={subtotal} />
                        </Text>
                      </div>
                      <Text className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </Text>
                      <div className="mt-6">
                        <Button
                          type="submit"
                          appendClassName="w-full"
                          onClick={onSubmit}
                        >
                          Checkout
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
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
