import { Dispatch } from 'react';
import { Item } from 'src/types';
import * as actions from './checkouts.actions';
import { CheckoutsAction } from './checkouts.types';

export const addItemToShoppingCart = (
  dispatch: Dispatch<CheckoutsAction>,
  item: Item,
  quantity?: number,
) => {
  dispatch(actions.addItemToShoppingCartAction(item, quantity));
};
