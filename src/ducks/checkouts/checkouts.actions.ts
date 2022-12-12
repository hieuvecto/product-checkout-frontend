import { Item } from 'src/types';
import { CheckoutsActionType } from './checkouts.types';

// common
export const addItemToShoppingCartAction = (item: Item, quantity = 1) => {
  if (quantity < 1) {
    throw new Error('Quantity must be greater than 0');
  }
  return {
    type: CheckoutsActionType.addItemToShoppingCart,
    payload: {
      item,
      quantity,
    },
  };
};
