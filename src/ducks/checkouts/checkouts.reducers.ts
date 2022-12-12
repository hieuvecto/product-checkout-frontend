import { CheckoutItem } from 'src/types';
import {
  CheckoutsAction,
  CheckoutsActionType,
  CheckoutsState,
} from './checkouts.types';

export const initialState: CheckoutsState = {
  checkoutItems: [],
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

    default:
      return state;
  }
};

export default reducer;
