import BigNumber from 'bignumber.js';
import { Dispatch } from 'react';
import { CheckoutItem, Customer } from 'src/types';

export type CheckoutsState = {
  checkoutItems: CheckoutItem[];
  // For triggering totalValue and discountedValue API call event.
  subTotalValue: BigNumber;
  totalValue: BigNumber;
  customers: Customer[];
  selectedCustomerName: string;
};

export const CheckoutsActionType = {
  addItemToShoppingCart: 'addItemToShoppingCart',
  removeItemFromShoppingCart: 'removeItemFromShoppingCart',
  setSelectedCustomerName: 'setSelectedCustomerName',
  setCustomers: 'setCustomers',
  setTotalValues: 'setTotalValues',
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
