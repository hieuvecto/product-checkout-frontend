import { createSelector } from 'reselect';
import { CustomersState } from './customers.types';

////////
// Selectors
////////

const selectedCustomerNameSelector = (state: CustomersState) =>
  state.selectedCustomerName;

////////
// Create selectors
////////

// common
export const getSelectedCustomerName = createSelector(
  selectedCustomerNameSelector,
  (name) => name,
);
