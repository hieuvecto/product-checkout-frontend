import { Dispatch } from 'react';
import * as actions from './customers.actions';
import { CustomersAction } from './customers.types';

export const setSelectedCustomerName = (
  dispatch: Dispatch<CustomersAction>,
  name: string,
) => {
  dispatch(actions.setSelectedCustomerNameAction(name));
};
