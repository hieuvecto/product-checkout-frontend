import { Dispatch } from 'react';

export type CustomersState = {
  selectedCustomerName: string;
};

export const CustomersActionType = {
  setSelectedCustomerName: 'setSelectedCustomerName',
};

export type CustomersActionType =
  typeof CustomersActionType[keyof typeof CustomersActionType];
export type CustomersAction = { type: CustomersActionType; payload?: any };

declare module 'react-redux' {
  interface DefaultRootState {
    customers: CustomersState;
  }
  export function useDispatch<
    TDispatch = Dispatch<CustomersAction>,
  >(): TDispatch;
}
