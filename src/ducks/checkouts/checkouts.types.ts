import { Dispatch } from 'react';
import { CheckoutItem } from 'src/types';

export type CheckoutsState = {
  checkoutItems: CheckoutItem[];
  subTotal?: string;
};

export const CheckoutsActionType = {
  addItemToShoppingCart: 'addItemToShoppingCart',
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
