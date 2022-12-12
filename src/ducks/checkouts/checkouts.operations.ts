import { Dispatch } from 'react';
import { Customer, Item } from 'src/types';
import * as actions from './checkouts.actions';
import { CheckoutsAction } from './checkouts.types';

export const addItemToShoppingCart = (
  dispatch: Dispatch<CheckoutsAction>,
  item: Item,
  quantity?: number,
) => {
  dispatch(actions.addItemToShoppingCartAction(item, quantity));
};

export const removeItemFromShoppingCart = (
  dispatch: Dispatch<CheckoutsAction>,
  item: Item,
) => {
  dispatch(actions.removeItemFromShoppingCartAction(item));
};

export const setSelectedCustomerName = (
  dispatch: Dispatch<CheckoutsAction>,
  name: string,
) => {
  dispatch(actions.setSelectedCustomerNameAction(name));
};

export const setCustomers = (
  dispatch: Dispatch<CheckoutsAction>,
  customer: Customer[],
) => {
  dispatch(actions.setCustomersAction(customer));
};
