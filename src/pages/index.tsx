import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home, { HomeProps } from 'src/components/templates/Home';
import { GET_CUSTOMERS_API_URL, GET_ITEMS_API_URL } from 'src/constants';
import {
  fetchTotalValues,
  setCustomers,
} from 'src/ducks/checkouts/checkouts.operations';
import {
  getCheckoutItems,
  getSelectedCustomerName,
  getSubTotalValue,
  getTotalValue,
} from 'src/ducks/checkouts/checkouts.selectors';
import { Context, Customer, Item } from 'src/types';

type HomePageProps = Context & {
  customers: Customer[];
  items: Item[];
};

const HomePage: NextPage<HomePageProps> = ({
  customers,
  items,
}: HomePageProps) => {
  const dispatch = useDispatch();
  const checkoutsSelector = useSelector((state) => state.checkouts);

  const checkoutItems = getCheckoutItems(checkoutsSelector);
  const selectedCustomerName = getSelectedCustomerName(checkoutsSelector);

  // CONSIDER: support redux SSR
  useEffect(() => {
    setCustomers(dispatch, customers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (checkoutItems.length > 0) {
      fetchTotalValues(
        dispatch,
        selectedCustomerName,
        checkoutItems.map((checkoutItem) => ({
          itemId: checkoutItem.item.id as number,
          quantity: checkoutItem.quantity,
        })),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCustomerName, checkoutItems]);

  const templateProps: HomeProps = {
    customers,
    items,
    checkoutItems,
    subTotalValue: getSubTotalValue(checkoutsSelector),
    totalValue: getTotalValue(checkoutsSelector),
    onSubmit: (e) => {
      e.preventDefault();
    },
    selectedCustomerName: getSelectedCustomerName(checkoutsSelector),
  };
  return <Home {...templateProps} />;
};

export async function getServerSideProps() {
  try {
    // Fetch data from external API
    const res = await Promise.all([
      axios.get(GET_CUSTOMERS_API_URL),
      axios.get(GET_ITEMS_API_URL),
    ]);
    const data = {
      customers: await res[0].data,
      items: await res[1].data,
    };

    // Pass data to the page via props
    return { props: { ...data } };
  } catch (e) {
    console.error(e);
    throw new Error('Failed to fetch data');
  }
}

export default HomePage;
