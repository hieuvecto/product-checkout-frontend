import axios from 'axios';
import BigNumber from 'bignumber.js';
import { Dispatch } from 'react';
import { COMPUTE_CHECKOUT_TEMPORARILY_API_URL } from 'src/constants';
import {
  CreateCheckoutInput,
  Customer,
  Item,
  ItemIdWithQuantity,
} from 'src/types';
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

export const fetchTotalValues = async (
  dispatch: Dispatch<CheckoutsAction>,
  customerName: string,
  itemIdsWithQuantities: ItemIdWithQuantity[],
) => {
  try {
    const bodyInput: CreateCheckoutInput = {
      customerName,
      itemIdsWithQuantities,
    };

    const res = await axios.post(
      COMPUTE_CHECKOUT_TEMPORARILY_API_URL,
      bodyInput,
    );

    const { subTotalValue, totalValue } = res.data;
    dispatch(
      actions.setTotalValuesAction(
        new BigNumber(subTotalValue),
        new BigNumber(totalValue),
      ),
    );
  } catch (e) {
    // TODO: handle error
    throw new Error('Cannot fetch computed values');
  }
};
