import { createSelector } from 'reselect';
import { CheckoutsState } from './checkouts.types';

////////
// Selectors
////////

const checkoutItemsSelector = (state: CheckoutsState) => state.checkoutItems;

const selectedCustomerNameSelector = (state: CheckoutsState) =>
  state.selectedCustomerName;

const customersSelector = (state: CheckoutsState) => state.customers;

////////
// Create selectors
////////

// common
export const getCheckoutItems = createSelector(
  checkoutItemsSelector,
  (model) => model,
);

export const getSelectedCustomerName = createSelector(
  selectedCustomerNameSelector,
  (name) => name,
);

export const getCustomers = createSelector(
  customersSelector,
  (customers) => customers,
);
