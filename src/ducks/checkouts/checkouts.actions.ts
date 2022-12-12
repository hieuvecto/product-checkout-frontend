import BigNumber from 'bignumber.js';
import { Customer, Item } from 'src/types';
import { CheckoutsActionType } from './checkouts.types';

// common
export const addItemToShoppingCartAction = (item: Item, quantity = 1) => {
  if (quantity < 1) {
    console.error('Quantity must be greater than 0');
    return;
  }
  return {
    type: CheckoutsActionType.addItemToShoppingCart,
    payload: {
      item,
      quantity,
    },
  };
};

export const removeItemFromShoppingCartAction = (item: Item) => {
  return {
    type: CheckoutsActionType.removeItemFromShoppingCart,
    payload: {
      item,
    },
  };
};

export const setSelectedCustomerNameAction = (name: string) => {
  return {
    type: CheckoutsActionType.setSelectedCustomerName,
    payload: name,
  };
};

export const setCustomersAction = (customers: Customer[]) => {
  return {
    type: CheckoutsActionType.setCustomers,
    payload: customers,
  };
};

export const setTotalValuesAction = (
  subTotalValue: BigNumber,
  totalValue: BigNumber,
) => {
  return {
    type: CheckoutsActionType.setTotalValues,
    payload: {
      subTotalValue,
      totalValue,
    },
  };
};
