import BigNumber from 'bignumber.js';
import { Dispatch } from 'react';
import { CheckoutItem, Customer } from 'src/types';

export type CheckoutsState = {
  checkoutItems: CheckoutItem[];
  subTotal: BigNumber;
  customers: Customer[];
  selectedCustomerName: string;
};

export const CheckoutsActionType = {
  addItemToShoppingCart: 'addItemToShoppingCart',
  removeItemFromShoppingCart: 'removeItemFromShoppingCart',
  setSelectedCustomerName: 'setSelectedCustomerName',
  setCustomers: 'setCustomers',
};

export type CheckoutsActionType =
  typeof CheckoutsActionType[keyof typeof CheckoutsActionType];
export type CheckoutsAction = { type: CheckoutsActionType; payload?: any };

declare module 'react-redux' {
  interface DefaultRootState {
    checkouts: CheckoutsState;
  }
  export function useDispatch<
    TDispatch = Dispatch<CheckoutsAction>,
  >(): TDispatch;
}
