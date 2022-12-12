import BigNumber from 'bignumber.js';
import { CheckoutItem } from 'src/types';
import {
  CheckoutsAction,
  CheckoutsActionType,
  CheckoutsState,
} from './checkouts.types';

export const initialState: CheckoutsState = {
  checkoutItems: [],
  customers: [],
  selectedCustomerName: 'default',
  subTotal: new BigNumber(0),
};

const reducer = (
  state: CheckoutsState = initialState,
  action: CheckoutsAction,
): CheckoutsState => {
  switch (action.type) {
    case CheckoutsActionType.addItemToShoppingCart: {
      const index = state.checkoutItems.findIndex(
        (checkoutItem) => checkoutItem.item?.id === action.payload?.item?.id,
      );
      if (index === -1) {
        const checkoutItem: CheckoutItem = {
          quantity: action.payload.quantity,
          item: { ...action.payload.item },
        } as CheckoutItem;
        return {
          ...state,
          checkoutItems: [...state.checkoutItems, checkoutItem],
        };
      }

      const newState: CheckoutsState = {
        ...state,
        checkoutItems: [...state.checkoutItems],
      };
      newState.checkoutItems[index].quantity += action.payload.quantity;

      return newState;
    }
    case CheckoutsActionType.removeItemFromShoppingCart: {
      const index = state.checkoutItems.findIndex(
        (checkoutItem) => checkoutItem.item?.id === action.payload?.item?.id,
      );
      if (index === -1) {
        return state;
      }

      return {
        ...state,
        checkoutItems: state.checkoutItems.filter(
          (checkoutItem) => checkoutItem.item?.id !== action.payload?.item?.id,
        ),
      };
    }
    case CheckoutsActionType.setSelectedCustomerName:
      return {
        ...state,
        selectedCustomerName: action.payload,
      };
    case CheckoutsActionType.setCustomers:
      return {
        ...state,
        customers: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
