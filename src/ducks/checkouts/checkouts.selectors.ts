import { createSelector } from 'reselect';
import { CheckoutsState } from './checkouts.types';

////////
// Selectors
////////

const checkoutItemsSelector = (state: CheckoutsState) => state.checkoutItems;

const subTotalValueSelector = (state: CheckoutsState) => state.subTotalValue;

const totalValueSelector = (state: CheckoutsState) => state.totalValue;

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

export const getSubTotalValue = createSelector(
  subTotalValueSelector,
  (subTotalValue) => subTotalValue,
);

export const getSelectedCustomerName = createSelector(
  selectedCustomerNameSelector,
  (name) => name,
);

export const getCustomers = createSelector(
  customersSelector,
  (customers) => customers,
);

export const getTotalValue = createSelector(
  totalValueSelector,
  (totalValue) => totalValue,
);
