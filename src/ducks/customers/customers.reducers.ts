import {
  CustomersAction,
  CustomersActionType,
  CustomersState,
} from './customers.types';

export const initialState: CustomersState = {
  selectedCustomerName: 'default',
};

const reducer = (
  state: CustomersState = initialState,
  action: CustomersAction,
): CustomersState => {
  switch (action.type) {
    case CustomersActionType.setSelectedCustomerName:
      return {
        ...state,
        selectedCustomerName: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
