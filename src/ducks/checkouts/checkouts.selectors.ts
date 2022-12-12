import { createSelector } from 'reselect';
import { CheckoutsState } from './checkouts.types';

////////
// Selectors
////////

const checkoutItemsSelector = (state: CheckoutsState) => state.checkoutItems;

////////
// Create selectors
////////

// common
export const getCheckoutItems = createSelector(
  checkoutItemsSelector,
  (model) => model,
);
