import { CustomersActionType } from './customers.types';

// common
export const setSelectedCustomerNameAction = (name: string) => {
  return {
    type: CustomersActionType.setSelectedCustomerName,
    payload: name,
  };
};
